import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Card } from './card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'UI/Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary = {
  args: {
    title: 'Card Title',
    description: 'Card description',
    category: 'Brand Identity',
    image: 'https://placeholder.com/1920x1150',
    url: 'https://example.com',
    wide: false,
  },
};
