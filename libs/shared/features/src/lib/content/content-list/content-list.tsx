/* eslint-disable-next-line */


import {ContentListItems} from '@supernaut/types';
import ContentColumn from '../content-column/content-column';

export interface ContentListProps {
  title: string;
  items: ContentListItems
  mode?: 'light' | 'dark';
}

export function ContentList({title,items, mode = 'dark'  }: ContentListProps) {
  return (
    <ContentColumn title={title} hTag={'h2'} type={'1/2'} mode={mode}>
      {items.items.map((item, index) => (
        <div key={index} className={'flex flex-col gap-y-5'}>
          <ContentColumn title={title} hTag={'h3'} type={'1/2'} mode={mode}>
            <ul>
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
