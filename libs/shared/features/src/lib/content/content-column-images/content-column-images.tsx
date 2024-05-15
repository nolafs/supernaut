/* eslint-disable-next-line */

import {BlockAnimateOnScroll} from '@supernaut/context';

import {TImageLink} from '@supernaut/types';
import ContentColumn from '../content-column/content-column';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {GridImages} from '@supernaut/shared-ui';

export interface ContentColumnImagesProps {
  title: string;
  items: TImageLink[];
  columnsSm?: number;
  columnsMd?: number;
  columnsLg?: number;
  itemWidth?: number;
  itemHeight?: number;
  mode?: 'light' | 'dark';
}

export function ContentColumnImages({title, items, mode, columnsSm, columnsMd, columnsLg, itemWidth = 425, itemHeight = 250 }: ContentColumnImagesProps) {
  return (
    <ContentColumn title={title} hTag={'h2'} type={'3/9'} mode={mode}>
      <BlockAnimateOnScroll animation="staggerList" duration={0.5} start="top 70%" target={'.image'}>
        <GridImages items={items}  columnsSm={columnsSm} columnsMd={columnsMd} columnsLg={columnsLg} itemWidth={itemWidth}
                    itemHeight={itemHeight}/>
      </BlockAnimateOnScroll>
    </ContentColumn>
  );
}

export default ContentColumnImages;
