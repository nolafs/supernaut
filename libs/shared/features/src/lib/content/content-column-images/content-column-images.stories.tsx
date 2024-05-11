import type { Meta } from '@storybook/react';
import { ContentColumnImages } from './content-column-images';

const meta: Meta<typeof ContentColumnImages> = {
  component: ContentColumnImages,
  tags: ['autodocs'],
  title: 'Features/Blocks/Content Column Images',
};
export default meta;


export const Primary = {
  args: {
    title: 'Our Partners',
    columnsSm: 1,
    columnsLg: 2,
    columnsMd: 2,
    items: [
      {
        id: '1',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 1',
      },
      {
        id: '2',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 2',
      },
      {
        id: '3',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 3',
      },
      {
        id: '4',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 4',
      },
      {
        id: '5',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 5',
      },
      {
        id: '6',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 6',
      },
      {
        id: '7',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 7',
      },
      {
        id: '8',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 8',
      },
      {
        id: '9',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 9',
      },
      {
        id: '10',
        image: 'https://via.placeholder.com/425x250',
        alt: 'Image 10',
      }
    ],
    itemWidth: 425,
    itemHeight: 250,
    mode: 'dark'
  },
};
