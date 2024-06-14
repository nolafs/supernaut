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
import {BlockAnimationProvider, ThemeProvider} from '@supernaut/context';
import NextTopLoader from 'nextjs-toploader';
import {ContentfulLivePreviewProvider} from '@contentful/live-preview/react';
import {ContentFullProvider} from '@supernaut/contentful';

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const settings = await SettingContent('Settings', i18nConfig.defaultLocale, process?.env.NEXT_PUBLIC_PREVIEW === 'true');
  const defaultImages = ['/share.jpg'];


  if(settings?.ogImage?.url){
    defaultImages[0] = settings?.ogImage?.url
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://supernautstudio.com/'),
    alternates: {
      canonical:  settings?.canonicalUrl || process.env.NEXT_PUBLIC_BASE_URL || '/',
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

  const navigation: TNavigationItem[] = settings?.mainNavigationCollection?.items.map(
    (item: any) => {
      if(!item?.sys){
        return
      }
      return {
        id: item?.sys.id,
        pageName: item?.pageName,
        slug: item?.slug,
        url: item?.url,
      };
    }
  ) as TNavigationItem[];


  const footerNavigation: TNavigationItem[] = settings?.footerNavigationCollection?.items.map(
    (item: any) => {
      if (!item?.sys) {
        return
      }
      return {
        id: item?.sys.id,
        pageName: item?.pageName,
        slug: item?.slug,
        url: item?.url,
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

      <NextTopLoader
        color={'var(--color-primary)'}
        height={5}
        showSpinner={false}
        shadow={false}
      />

        <ThemeProvider >

          <ModalProvider>

            <Navigation
                        sys={settings?.sys}
                        logo={settings?.logo?.url}
                        items={navigation}
                        social={social}
                        contactFormDialog={settings?.contactFormDialog} />


            <BlockAnimationProvider>
              <main className={'min-h-screen'}>
                {children}
              </main>
            </BlockAnimationProvider>

              <Footer
                copyright={settings?.copyrightLine}
                strapline={settings?.strapline}
                legal={legalNavigation}
                navigation={footerNavigation}
                contactButtonLabel={settings?.contactDialogButtonLabel}
                contactDialog={settings?.contactFormDialog}
                social={social}
              />


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
