/* eslint-disable-next-line */
import ContentColumn from '../content/content-column/content-column';
import {BlockAnimateOnScroll} from '@supernaut/context';


export interface Services {
      name: string;
}

export interface Category {
  name: string | undefined | null;
  slug: string | undefined | null;
  description: {
    json: any;
  }
  servicesCollection: {
    items: Services[];
  };
}

export interface ServicesProps {
  title: string;
  servicesCollection: {
    items: Category[];
  };
}

export function Services({title, servicesCollection}: ServicesProps) {



  if(!servicesCollection || !servicesCollection.items.length) {
    return <div>No services</div>;
  }

  return (
    <ContentColumn title={title} hTag={'h2'} type={'1/2'}>
      {servicesCollection?.items.map((item, index) => (
        <div key={index} className={'flex flex-col mb-10'}>
          <ContentColumn title={item.name} hTag={'h3'} type={'1/2'}  padding={'none'}>
            <BlockAnimateOnScroll animation="staggerList" duration={0.5} target={'li'} start="top 80%">
              <ul className={'flex flex-col space-y-5'}>

                {item?.servicesCollection?.items.map((subItem, subIndex) => (
                  <li key={subIndex} className={'text-xl lg:text-2xl font-normal'}>{subItem.name}</li>
                ))}

              </ul>
            </BlockAnimateOnScroll>
          </ContentColumn>
        </div>
      ))}
    </ContentColumn>
  );
}

export default Services;
