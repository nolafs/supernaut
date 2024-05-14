import process from 'process';
import { notFound } from 'next/navigation';
import {PageContent} from '../../../../data/pages';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {Header} from '@supernaut/shared-ui';
import {SectionResolver} from '@supernaut/features';

export interface PageProps {
  params: { page: string }
}


export default async function Page({ params }: PageProps
) {

  const pageData = await PageContent(params?.page, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  if (!pageData) {
    return notFound();
  }

  if(pageData?.topSectionsCollection?.items.length) {

    return (<SectionResolver sections={pageData?.topSectionsCollection?.items} />)

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
