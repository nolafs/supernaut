
import {Metadata, ResolvingMetadata} from 'next';
import {ReactNode, Suspense} from 'react';

import i18nConfig from '../../../../../next-i18next.config';
import SettingContent from '../../../../data/settings';
import {PageContent} from '../../../../data/pages';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Header} from '@supernaut/shared-ui';
import {ThemeSwitchServer} from '@supernaut/features';
import {extractFirstParagraph} from '@supernaut/utils';

const PAGE_NAME = 'work';

interface LayoutProps {
  children: ReactNode;
  list: ReactNode
}

type Props = {
  params: { page: string }
}

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const settings = await SettingContent('Settings', i18nConfig.defaultLocale, process?.env.NEXT_PUBLIC_PREVIEW === 'true');
  const page = await PageContent(PAGE_NAME, i18nConfig.defaultLocale, process?.env.NEXT_PUBLIC_PREVIEW === 'true');
  const p = await parent;


  return {
    title: (page?.seo?.title) ? page.seo.title : `${settings?.metaTitle} : ${page?.pageName}` || p.title,
    description: page?.seo?.description || extractFirstParagraph(page?.bodyText?.json) || (await parent).description,
  }
}



export default async function Layout({children, list}: LayoutProps) {

  const pageData = await PageContent(PAGE_NAME, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  return (
    <>
      <Header
        sys={pageData?.sys}
        pageName={pageData?.pageName}
        title={pageData?.title}
      />

      {children}
      {list}
      <Suspense>
        <ThemeSwitchServer mode={pageData?.mode}/>
      </Suspense>
    </>
  )
}
