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
  args: { itemsCollection: {
      items: [
        {
          id: '1',
          itemsCollection: 'https://fakeimg.pl/940x626',
          title: 'Image 1',
        },
        {
          id: '2',
          url: 'https://fakeimg.pl/640x226',
          title: 'Image 2',
        },
      ],
    }
  },
};

export const Single: Story = {
  args: {
    imagesCollection: {
      items: [
        {
          id: '1',
          url: 'https://fakeimg.pl/1820x1024',
          title: 'Image 1',
        },
      ],
    }
  },
};
