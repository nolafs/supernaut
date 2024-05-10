

/* eslint-disable-next-line */
import {TProfileItem} from '@supernaut/types';
import ContentProfileItem from './content-profile-item/content-profile-item';
import cn from 'classnames';

export interface ContentProfileListProps {
  items: TProfileItem[];
  mode?: string;
}

export function ContentProfileList({items, mode}: ContentProfileListProps) {
  return (
    <div className={'w-full max-w-9xl mx-auto px-5 md:px-10'}>
      <div className={cn('flex flex-col md:flex-row w-full md:w-10/12',
        mode === 'dark' && 'text-white',
        mode === 'light' && 'text-black bg-white'
        )}>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-10'}>
          {items.map((item) => (
            <ContentProfileItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentProfileList;
