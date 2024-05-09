/* eslint-disable-next-line */
import {ImageLink} from '@supernaut/types';
import cn from 'classnames';
import {GridImages} from '@supernaut/shared-ui';
import ContentColumn from '../content-column/content-column';

export interface ContentColumnImagesProps {
  title: string;
  items: ImageLink[];
  columnsSm?: number;
  columnsMd?: number;
  columnsLg?: number;
  itemWidth?: number;
  itemHeight?: number;
  mode?: 'light' | 'dark';
}

export function ContentColumnImages({title, items, mode, columnsSm, columnsMd, columnsLg, itemWidth, itemHeight }: ContentColumnImagesProps) {
  return (
    <ContentColumn title={title} hTag={'h2'} type={'3/9'} mode={mode}>
        <GridImages items={items}  columnsSm={columnsSm} columnsMd={columnsMd} columnsLg={columnsLg} itemWidth={425}
                    itemHeight={250}/>
    </ContentColumn>
  );
}

export default ContentColumnImages;
