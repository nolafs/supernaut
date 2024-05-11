/* eslint-disable-next-line */
import ContentColumn from '../content-column/content-column';
import {GridImages} from '@supernaut/shared-ui';
import {TImageLink} from '@supernaut/types';

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
        <GridImages items={items}  columnsSm={columnsSm} columnsMd={columnsMd} columnsLg={columnsLg} itemWidth={itemWidth}
                    itemHeight={itemHeight}/>
    </ContentColumn>
  );
}

export default ContentColumnImages;
