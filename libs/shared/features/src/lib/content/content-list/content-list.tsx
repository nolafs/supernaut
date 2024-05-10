/* eslint-disable-next-line */
import {TContentListItems} from '@supernaut/types';
import ContentColumn from '../content-column/content-column';

export interface ContentListProps {
  title: string;
  items: TContentListItems
  mode?: 'light' | 'dark';
}

export function ContentList({title,items, mode = 'dark'  }: ContentListProps) {
  return (
    <ContentColumn title={title} hTag={'h2'} type={'1/2'} mode={mode}>
      {items.items.map((item, index) => (
        <div key={index} className={'flex flex-col mb-10'}>
          <ContentColumn title={item.title} hTag={'h3'} type={'1/2'} mode={mode} padding={'none'}>
            <ul className={'flex flex-col gap-y-2'}>
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </ContentColumn>
        </div>
      ))}
    </ContentColumn>
  );
}

export default ContentList;
