import {WorkCollection, WorkFeaturedCollection} from '../../../../data/work';
import {Card} from '@supernaut/shared-ui';
import {Suspense} from 'react';
import InfiniteScrollPagination from '../../../../components/infinite-scroll-pagination/InfiniteScrollPagination';
export default async function Page({searchParams}: {
  searchParams: { page: string, category: string }
}) {

  console.log('searchParams', searchParams);

  const workFeatured = await WorkFeaturedCollection(1, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  const featuredWork = workFeatured?.workCollection?.items[0];


  return (<div className={'wrapper mt-10'}>
      <div className={'border-t-2 border-secondary/40 pt-5 md:pt-10'}>
        <section>
          <Card
            title={featuredWork?.title}
            description={featuredWork?.subtitle}
            url={featuredWork?.slug}
            prefix={'work'}
            image={featuredWork?.featureImage?.url}
            wide={true} />
        </section>

        <section>

            <Suspense fallback={<div>Loading...</div>}>
              <InfiniteScrollPagination />
            </Suspense>

        </section>
      </div>
    </div>
  )
}
