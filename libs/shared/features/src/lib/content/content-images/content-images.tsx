/* eslint-disable-next-line */
import {TImageLink} from '@supernaut/types';
import {BlockAnimateOnScroll, BlockAnimationProvider} from '@supernaut/context';

import dynamic from 'next/dynamic';

const NotificationBlock = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.NotificationBlock));
const GridImages = dynamic(() => import('@supernaut/shared-ui').then((mod) => mod.GridImages));

interface ItemsCollection {
  items: TImageLink[];
}

export interface ContentImagesProps {
  imagesCollection: ItemsCollection
  columnsSm?: number;
  columnsMd?: number;
  columnsLg?: number;
  itemWidth?: number;
  itemHeight?: number;
  imageVariant?: number;
  gridVariant?: number;
  mode?: 'light' | 'dark';
}

const GRID_VARIANTS = [
  '',
  'px-0 py-0 md:px-0 md:py-0 lg:px-0 lg:py-0',
  'wrapper gap-0 md:gap-10'
  ]

const IMAGE_VARIANTS = [
  '',
  'gap-0 md:gap-10 pt-10  max-w-10/12 mx-auto'
]


export function ContentImages({imagesCollection, mode, imageVariant, gridVariant, columnsSm, columnsMd, columnsLg, itemWidth = 940, itemHeight = 626}: ContentImagesProps) {

  console.log('ContentImages imageVariant', imageVariant);
  console.log('ContentImages gridVariant', imageVariant);

  if(!imagesCollection || !imagesCollection.items.length) return <NotificationBlock body={'No images found'} type={'warning'} />;

  if(imagesCollection.items.length === 1) {
    columnsSm = 0;
    columnsMd = 0;
    columnsLg = 0;
    itemWidth = 1820;
  }


  return (<BlockAnimationProvider>
      <BlockAnimateOnScroll animation="staggerList" duration={0.5} start="top 90%" target={'.image'}>
        <GridImages
          imageClass={IMAGE_VARIANTS[imageVariant || 0]}
          girdClass={ GRID_VARIANTS[gridVariant || 0]}
          items={imagesCollection.items}
          columnsSm={columnsSm}
          columnsMd={columnsMd}
          columnsLg={columnsLg}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
        />
      </BlockAnimateOnScroll>
    </BlockAnimationProvider>
  );
}

export default ContentImages;
