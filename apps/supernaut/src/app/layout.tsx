import './global.scss';
import cn from 'classnames';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import {Metadata, ResolvingMetadata, Viewport} from 'next';
import {ReactNode, Suspense} from 'react';
import i18nConfig from '../../next-i18next.config';

import {CookieBanner, Footer, ModalsContainer, Navigation, PageTransition} from '@supernaut/features';
import {GoogleAnalytics} from '@supernaut/utils';
import {TNavigationItem, TSocialLinkItemType} from '@supernaut/types';
import SettingContent from '../data/settings';
import {ModalProvider} from '@supernaut/features';
import {ThemeProvider} from '@supernaut/context';
import NextTopLoader from 'nextjs-toploader';

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const settings = await SettingContent('Settings', i18nConfig.defaultLocale, process?.env.NEXT_PUBLIC_PREVIEW === 'true');
  const defaultImages = ['/share.jpg'];

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://supernautstudio.com/'),
    alternates: {
      canonical: settings?.canonicalUrl || '/',
    },
    title: settings?.metaTitle || (await parent).title || '-= Supernaut Studio =-',
    description: settings?.metaDescription || (await parent).description,
    openGraph: {
      images: [...defaultImages],
    },
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png',
      },
    ],
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true
      },
    },
  }
}


export default async function RootLayout({ children }: { children: ReactNode }) {

  const settings = await SettingContent('Settings', i18nConfig.defaultLocale, process?.env.NEXT_PUBLIC_PREVIEW === 'true');

  const navigation = settings?.mainNavigationCollection?.items.map(
    (item) => {
      if(!item?.sys){
        return
      }
      return {
        id: item?.sys.id,
        pageName: item?.pageName,
        slug: item?.slug,
      };
    }
  ) as TNavigationItem[];

  const legalNavigation = settings?.legalNavigationCollection?.items.map(
    (item) => {
      if(!item?.sys){
        return
      }
      return {
        id: item?.sys.id,
        pageName: item?.pageName,
        slug: item?.slug,
      };
    }
  ) as TNavigationItem[];


  const social = settings?.socialMediaCollection?.items as unknown as TSocialLinkItemType[];

  return (
    <html
      lang="en"
      className={cn(`${GeistSans.variable} ${GeistMono.variable}`)}
      data-theme="dark"
    >
      <body>

        <ThemeProvider >
          <NextTopLoader
            color={'var(--color-primary)'}
            height={5}
            showSpinner={false}
            shadow={false}
          />
          <ModalProvider>

            <Navigation items={navigation}  social={social} contactFormDialog={settings?.contactFormDialog} />
            <PageTransition title={'Supernaut'} page={'Page Name'}>
              <main className={'min-h-screen'}>
                {children}
              </main>


              <Footer
                copyright={settings?.copyrightLine}
                strapline={settings?.strapline}
                legal={legalNavigation}
                contactButtonLabel={settings?.contactDialogButtonLabel}
                contactDialog={settings?.contactFormDialog}
                social={social}
              />
            </PageTransition>

            <Suspense>
              <CookieBanner />
            </Suspense>

            <ModalsContainer />

            </ModalProvider>
            <Suspense>
              <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_GOOGLE_ANALYTICS_ID || ''}/>
            </Suspense>
        </ThemeProvider>

      </body>
    </html>

  );

}
