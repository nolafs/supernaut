import process from 'process';
import { notFound } from 'next/navigation';
import {PageContent} from '../../../../data/pages';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Header} from '@supernaut/shared-ui';
import {SectionResolver, ThemeSwitchServer} from '@supernaut/features';
import {Suspense} from 'react';
import {Metadata, ResolvingMetadata} from 'next';
import {Work} from '../../../../data/work';
import {extractFirstParagraph} from '@supernaut/utils';

export interface PageProps {
  params: { page: string }
}

type Props = {
  params: { page: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pageData = await PageContent(params.page, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  console.log('WORK SLUG', params, searchParams)

  const previousImages = (await parent).openGraph?.images || [];
  const images = [];

  if(pageData?.seo?.image){
    images.push(`${pageData?.seo?.image.url}?fit=crop&w=1200&h=630&fm=webp&q=60`);
    images.push(...previousImages);
  } else {
    images.push(...previousImages);
  }

  return {
    title: pageData?.seo?.title || pageData?.title || (await parent).title,
    description: pageData?.seo?.description || extractFirstParagraph(pageData?.bodyText?.json) || (await parent).description,
    openGraph: {
      images: images,
    },
    robots: {
      index: pageData?.seo?.noIndex === true ? false : true,
      follow: pageData?.seo?.noFollow === true ? false : true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true
      },
    },
  }
}


export default async function Page({ params }: PageProps
) {

  const pageData = await PageContent(params?.page, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  if (!pageData) {
    return notFound();
  }

  if(pageData?.topSectionsCollection?.items.length) {

    return (<>
      <SectionResolver sections={pageData?.topSectionsCollection?.items} />
      <Suspense>
        <ThemeSwitchServer mode={pageData?.mode}/>
      </Suspense>
    </>)

  } else {
    return (
        <article>
          <div className={'wrapper'}>
            <div className={'flex flex-col md:flex-row gap-x-5'}>
              <div className={'w-full md:w-4/12'}>
                <Header
                  pageName={pageData?.pageName}
                  title={pageData?.title}
                />
              </div>
              <div className={'prose prose-base md:prose-xl mt-[130px] lg:mt-[230px] px-5 md:px-10'}>
                {(pageData.bodyText) && (documentToReactComponents(pageData?.bodyText.json))}
              </div>
            </div>
          </div>
        </article>
    );
  }
}
