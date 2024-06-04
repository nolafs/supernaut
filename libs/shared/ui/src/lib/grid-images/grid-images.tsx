'use client';
import {TImageLink} from '@supernaut/types';
import cn from 'classnames';
import Image from 'next/image';
import NotificationBlock from '../notification/notification-block';
import {contentfulLoader} from '@supernaut/utils';

/* eslint-disable-next-line */
export interface GridImagesProps {
 items: TImageLink[];
 columnsSm?: number;
 columnsMd?: number;
 columnsLg?: number;
 girdClass?: string;
 imageClass?: string;
 itemWidth: number;
 itemHeight: number;
}

const COLUMNS_SM = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
];

const COLUMNS_MD = [
  'md:grid-cols-1',
  'md:grid-cols-2',
  'md:grid-cols-3',
  'md:grid-cols-4',
  'md:grid-cols-5',
  'md:grid-cols-6',
  'md:grid-cols-7',
  'md:grid-cols-8',
  'md:grid-cols-9',
  'md:grid-cols-10',
];

const COLUMNS_LG = [
  'lg:grid-cols-1',
  'lg:grid-cols-2',
  'lg:grid-cols-3',
  'lg:grid-cols-4',
  'lg:grid-cols-5',
  'lg:grid-cols-6',
  'lg:grid-cols-7',
  'lg:grid-cols-8',
  'lg:grid-cols-9',
  'lg:grid-cols-10',
];


export function GridImages({items, columnsSm, columnsMd, columnsLg, itemWidth, itemHeight, girdClass = 'gap-0', imageClass = 'px-5 pb-5 md:px-10 md:pb-10 lg:px-20 lg:pb-[75px]'}: GridImagesProps) {

  if(!items || !items.length) return <NotificationBlock body={'No images found'} type={'warning'} />;

  return (
      <div className={cn('grid', COLUMNS_SM[columnsSm || 0], COLUMNS_MD[columnsMd || 0 ], COLUMNS_LG[columnsLg || 0], girdClass )}>
        {items.map((item, index) => {
          return (
            <div key={`${item?.sys?.id || item.id}_${index}` } className={cn('image relative', imageClass)}>
              { (item?.url) &&
                <Image
                  loader={(props) => contentfulLoader(props, {fit: 'fill', f: 'center', fm: 'webp'})}
                  src={`${item.url}`}
                  alt={item.title}
                  width={itemWidth || item?.width}
                  height={itemHeight || item?.height} className={'object-center object-cover w-full h-full'} />
              }
            </div>
          );
        })}
      </div>
  );
}

export default GridImages;
