import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Features/Slider',

};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Home = {
  args: {
    slides: [
      {
        title: 'Neonhive',
        description: 'Creating a personal brand identity for leaders in the indie games marketing scene.',
        image: 'https://via.placeholder.com/1920x1000',
      },
      {
        title: 'Slide 2',
        description: 'Slide 2 description',
        image: 'https://via.placeholder.com/1920x1000',
      },
      {
        title: 'Slide 3',
        description: 'Slide 3 description',
        image: 'https://via.placeholder.com/1920x1000',
      },
      {
        title: 'Slide 4',
        description: 'Slide 4 description',
        image: 'https://via.placeholder.com/1920x1000',
      }
    ],
  },
};
