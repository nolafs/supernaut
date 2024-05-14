/* eslint-disable-next-line */
import {GridImages} from '@supernaut/shared-ui';
import {TImageLink} from '@supernaut/types';
import {BlockAnimateOnScroll, BlockAnimationProvider} from '@supernaut/context';

export interface ContentImagesProps {
  items: TImageLink[];
  columnsSm?: number;
  columnsMd?: number;
  columnsLg?: number;
  itemWidth?: number;
  itemHeight?: number;
  mode?: 'light' | 'dark';
}

export function ContentImages({items, mode, columnsSm, columnsMd, columnsLg, itemWidth = 940, itemHeight = 626}: ContentImagesProps) {

  if(!items || !items.length) return <div>No items</div>;

  if(items.length === 1) {
    columnsSm = 0;
    columnsMd = 0;
    columnsLg = 0;
    itemWidth = 1820;
  }

  if(items.length > 1) {
    columnsSm = 0;
    columnsMd = 1;
    columnsLg = 1;
  }

  return (<BlockAnimationProvider>
    <div className={'w-full max-w-9xl mx-auto flex flex-row justify-center'}>
      <BlockAnimateOnScroll animation="staggerList" duration={0.5} start="top 90%" target={'.image'}>
        <GridImages
          imageClass={'px-0 py-0 md:px-0 md:py-0 lg:px-0 lg:py-0'}
          girdClass={'gap-0 md:gap-10 pt-10  max-w-10/12 mx-auto' }
          items={items}
          columnsSm={columnsSm}
          columnsMd={columnsMd}
          columnsLg={columnsLg}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
        />
      </BlockAnimateOnScroll>
    </div>
    </BlockAnimationProvider>
  );
}

export default ContentImages;
