import type { Meta, StoryObj } from '@storybook/react';
import { Quotes } from './quotes';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Quotes> = {
  component: Quotes,
  title: 'Features/Blocks/Quotes',
};
export default meta;
type Story = StoryObj<typeof Quotes>;

const defaultArgs = {
  internalName: 'test',
  items: [
    {
      id: '1',
      quote: 'Supernaut immerse themselves fully into every project.',
      author: 'Helen Lawson',
      position: 'VP of Marketing/Green Man Gaming',
    },
    {
      id: '2',
      quote: 'The best way to predict the future is to invent it.',
      author: 'Alan Kay',
      position: 'Computer Scientist',
    },
    {
      id: '3',
      quote: 'The best way to predict the future is to invent it.',
      author: 'Alan Kay',
      position: 'Computer Scientist',
    },
    {
      id: '4',
      quote: 'The best way to predict the future is to invent it.',
      author: 'Alan Kay',
      position: 'Computer Scientist',
    },
  ],
};

export const Primary = {
  args: {
    ...defaultArgs,
  },
};
