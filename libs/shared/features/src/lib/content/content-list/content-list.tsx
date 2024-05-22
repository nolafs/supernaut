/* eslint-disable-next-line */
import {BlockAnimateOnScroll} from '@supernaut/context';
import {TContentListItems} from '@supernaut/types';
import ContentColumn from '../content-column/content-column';

export interface ContentListProps {
  title: string;
  items: TContentListItems
  mode?: 'light' | 'dark';
}

export function ContentList({title,items }: ContentListProps) {
  return (
    <ContentColumn title={title} hTag={'h2'} type={'1/2'}>
      {items.items.map((item, index) => (
        <div key={index} className={'flex flex-col mb-10'}>
          <ContentColumn title={item.title} hTag={'h3'} type={'1/2'} padding={'none'}>
            <BlockAnimateOnScroll animation="staggerList" duration={0.5} target={'li'} start="top 80%">
            <ul className={'flex flex-col space-y-5'}>

              {item.items.map((subItem, subIndex) => (
                <li key={subIndex} className={'text-xl lg:text-2xl font-normal'}>{subItem}</li>
              ))}

            </ul>
            </BlockAnimateOnScroll>
          </ContentColumn>
        </div>
      ))}
    </ContentColumn>
  );
}

export default ContentList;
