/* eslint-disable-next-line */
import {TImageLink} from '@supernaut/types';
import {BlockAnimateOnScroll} from '@supernaut/context';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {GridImages, NotificationBlock} from '@supernaut/shared-ui';

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
  'wrapper p-0',
  'wrapper p-0 gap-5 md:gap-10',
  'wrapper gap-5 md:gap-10',
  ]

const IMAGE_VARIANTS = [
  '',
  'gap-5 md:gap-10 pt-10  max-w-10/12 mx-auto'
]


export function ContentImages({imagesCollection, mode, imageVariant, gridVariant, columnsSm, columnsMd, columnsLg, itemWidth = 1920, itemHeight = 1080}: ContentImagesProps) {

  if(!imagesCollection || !imagesCollection.items.length) return <NotificationBlock body={'No images found'} type={'warning'} />;

  let animationType: any = 'staggerList';


  if(imagesCollection.items.length === 1) {
    columnsSm = 0;
    columnsMd = 0;
    columnsLg = 0;
    itemWidth = 1920;
    itemHeight = 1080;
    animationType = 'slideIn';
  } else{
    itemWidth = 1920 / imagesCollection.items.length +1;

  }


  console.log('ITEMS', itemWidth, itemHeight)



  return (
      <BlockAnimateOnScroll animation={animationType} duration={0.5} start="top 80%" target={'.image'} marker={true}>
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
  );
}

export default ContentImages;
