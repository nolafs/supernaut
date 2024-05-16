import process from 'process';
import { notFound } from 'next/navigation';
import {PageContent} from '../../../../data/pages';
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
            </div>
          </div>
          {pageData?.topSectionsCollection?.items &&
            <SectionResolver sections={pageData?.topSectionsCollection?.items}/>
          }
        </article>
    );
}
