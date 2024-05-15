import {LogoAnimated, SectionResolver} from '@supernaut/features';
import {PageContent} from '../data/pages';
import {notFound} from 'next/navigation';
import {Header} from '@supernaut/shared-ui';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

export default async function Index() {
  const homeData = await PageContent('home', 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');

  if (!homeData) {
    return notFound();
  }

  if (homeData?.topSectionsCollection?.items.length) {

    return (<SectionResolver sections={homeData?.topSectionsCollection?.items}/>)

  } else {
    return (
      <article>
        <div className={'wrapper'}>
          <div className={'flex flex-col md:flex-row gap-x-5'}>
            <div className={'w-full md:w-4/12'}>
              <Header
                pageName={homeData?.pageName}
                title={homeData?.title}
              />
            </div>
            <div className={'prose prose-base md:prose-xl mt-[130px] lg:mt-[230px] px-5 md:px-10'}>
              {(homeData.bodyText) && (documentToReactComponents(homeData?.bodyText.json))}
            </div>
          </div>
        </div>
      </article>
    );
  }
}
