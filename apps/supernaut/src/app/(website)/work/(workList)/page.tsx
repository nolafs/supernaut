import {WorkFeaturedCollection} from '../../../../data/work';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Card} from '@supernaut/shared-ui';
export default async function Page({searchParams}: {
  searchParams: { page: string, category: string }
}) {

  const workFeatured = await WorkFeaturedCollection(1, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  const featuredWork = workFeatured?.workCollection?.items[0];

  return (
  <section>
    <div className={'wrapper mt-10'}>
      <div className={'border-t-2 border-secondary/40 pt-5 md:pt-10'}>
        <Card
          title={featuredWork?.title}
          description={featuredWork?.subtitle}
          url={featuredWork?.slug}
          prefix={'work'}
          image={featuredWork?.featureImage?.url}
          wide={true}/>
      </div>
    </div>
  </section>
  )
}
