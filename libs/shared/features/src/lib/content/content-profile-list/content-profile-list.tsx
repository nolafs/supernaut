

/* eslint-disable-next-line */
import {TProfileItem} from '@supernaut/types';
import cn from 'classnames';
import ContentProfileItem from './content-profile-item/content-profile-item';
import dynamic from 'next/dynamic';

const NotificationBlock = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.NotificationBlock));


export interface ItemCollection {
  items: TProfileItem[];

}

export interface ContentProfileListProps {
  sys?: any;
  itemsCollection: ItemCollection;
}

export function ContentProfileList({sys, itemsCollection}: ContentProfileListProps) {

  if(!itemsCollection || !itemsCollection.items.length) return <NotificationBlock body={'No items found'} type={'warning'} />;

  return (
    <div className={'w-full max-w-9xl mx-auto px-5 md:px-10 text-primary'} data-sb-object-id={sys.id}>
      <div className={cn('flex flex-col md:flex-row w-full md:w-9/12',
        )}>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-10'}>
          {itemsCollection?.items?.map((item) => (
            <ContentProfileItem key={item.sys.id} item={item} id={item.sys.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentProfileList;
