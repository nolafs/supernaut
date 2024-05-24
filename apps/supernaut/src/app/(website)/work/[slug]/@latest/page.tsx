/* eslint-disable-next-line */
import {WorkCollection} from '../../../../../data/work';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {Card} from '@supernaut/shared-ui';





export default async function List() {
  const work = await WorkCollection(3, 0, 'en-US', process.env.NEXT_PUBLIC_PREVIEW === 'true');



  if(!work?.workCollection?.items.length){
    throw new Error('No projects found')
  }

  return (
        <div className={'wrapper my-10 md:my-20'}>
          <section>
            <div className={'mb-5 md:mb-16'}>
              <h2 className={'overflow-y-visible'}>More Projects</h2>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-5'}>
              {work.workCollection?.items.map((item, index) => {
                return (
                  <Card key={`${index}-${item?.sys.id}`}
                        title={item?.title}
                        categories={item?.serviceCategoryCollection?.items}
                        image={item?.featureImage?.url}
                        url={item?.slug}
                        prefix={'work'}
                        small={true}
                        wide={false}/>
                )
              })}
            </div>
          </section>
        </div>
  );
}
