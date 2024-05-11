import type { Meta, StoryObj } from '@storybook/react';
import { ContentImages } from './content-images';


const meta: Meta<typeof ContentImages> = {
  component: ContentImages,
  tags: ['autodocs'],
  title: 'Features/Blocks/Content Images',
};
export default meta;
type Story = StoryObj<typeof ContentImages>;

export const Primary = {
  args: {
    items: [
      {
        id: '1',
        image: 'https://via.placeholder.com/940x626',
        alt: 'Image 1',
      },
      {
        id: '2',
        image: 'https://via.placeholder.com/640x226',
        alt: 'Image 2',
      },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [
      {
        id: '1',
        image: 'https://via.placeholder.com/1820x1024',
        alt: 'Image 1',
      },
    ],
  },
};
