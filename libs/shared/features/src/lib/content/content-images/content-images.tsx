/* eslint-disable-next-line */
import {TImageLink} from '@supernaut/types';
import {BlockAnimateOnScroll} from '@supernaut/context';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {GridImages, NotificationBlock} from '@supernaut/shared-ui';

interface ItemsCollection {
  items: TImageLink[];
}

export interface ContentImagesProps {
  sys?: any;
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
  'wrapper p-0',
  'wrapper p-0 gap-3 md:gap-5',
  'wrapper gap-3 md:gap-5',
  ]

const IMAGE_VARIANTS = [
  '',
  'gap-3 md:gap-5 pt-5  max-w-10/12 mx-auto'
]


export function ContentImages({sys, imagesCollection, mode, imageVariant, gridVariant, columnsSm, columnsMd, columnsLg, itemWidth, itemHeight}: ContentImagesProps) {

  if(!imagesCollection || !imagesCollection.items.length) return <NotificationBlock body={'No images found'} type={'warning'} />;

  let animationType: any = 'staggerList';

  if(imagesCollection.items.length === 1) {
    columnsSm = 0;
    columnsMd = 0;
    columnsLg = 0;
    itemWidth = (itemWidth) ? itemWidth : 1920;
    itemHeight = (itemHeight) ? itemHeight : 1080;
    animationType = 'slideIn';

  } else{

    if(!itemWidth || !itemHeight) {
      itemWidth = 1920 / imagesCollection.items.length + 1;
      itemHeight = 1080 / imagesCollection.items.length + 1;
    }
  }

  return (
      <BlockAnimateOnScroll animation={animationType} duration={0.5} start="top 80%" target={'.image'} marker={false}>
        <GridImages key={sys?.id}
          sys={sys}
          imageClass={IMAGE_VARIANTS[imageVariant || 0]}
          gridClass={ GRID_VARIANTS[gridVariant || 0]}
          items={imagesCollection.items}
          columnsSm={columnsSm}
          columnsMd={columnsMd}
          columnsLg={columnsLg}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
        />
      </BlockAnimateOnScroll>
  );
}

export default ContentImages;
