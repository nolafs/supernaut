import {WorkCollection, WorkFeaturedCollection} from '../../../../data/work';
import {Card} from '@supernaut/shared-ui';

export default async function Page({searchParams}: {
  searchParams: { page: string, category: string }
}) {

  console.log('searchParams', searchParams);

  const workData = await WorkCollection(10, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  const workFeatured = await WorkFeaturedCollection(1, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');
  let featuredWork = null;
  console.log('workData', workData)

  if(!workData) {
    return (<div>Work not found</div>);
  }

  if(!workData?.workCollection?.items.length){
    return (<div>Work not found</div>);
  }


  if(workFeatured?.workCollection?.items.length && workFeatured?.workCollection?.items[0]){
    const featuredWork = workFeatured?.workCollection?.items[0];
    workData.workCollection.items = workData.workCollection.items.filter(work => work?.sys?.id !== featuredWork?.sys?.id);
  }

  if(workFeatured?.workCollection?.items[0]) {
    featuredWork = workFeatured?.workCollection?.items[0];
  } else {
    featuredWork = workData.workCollection.items[0]
  }

  console.log('featuredWork', featuredWork)

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
          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-16 mb:mt-20'}>
          {workData?.workCollection?.items.map((work, index) => {
            return (
                <Card key={index}
                  title={work?.title}
                  image={work?.featureImage?.url}
                  url={work?.slug}
                  prefix={'work'}
                  wide={false} />
            )
          })}
          </div>
        </section>
      </div>
    </div>
  )
}
