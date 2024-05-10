import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { GridImages } from './grid-images';

const meta: Meta<typeof GridImages> = {
  component: GridImages,
  title: 'UI/Grid Images',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof GridImages>;

export const Primary = {
  args: {
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
  },
};
