import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Features/Slider',
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Home = {
  args: {
    autoplay: true,
    slidesCollection: {items:[
      {
        title: 'Neonhive',
        description:
          'Creating a personal brand identity for leaders in the indie games marketing scene.',
        image: { url: 'https://picsum.photos/id/1/1920/1000'}
      },
      {
        title: 'Slide 2',
        description: 'Slide 2 description',
        image: {url: 'https://picsum.photos/id/1/1920/1000'}
      },
      {
        title: 'Slide 3',
        description: 'Slide 3 description',
        image: {url: 'https://picsum.photos/id/1/1920/1000'}
      },
      {
        title: 'Slide 4',
        description: 'Slide 4 description',
        image: {url: 'https://picsum.photos/id/1/1920/1000'}
      },
    ]},
  },
};
