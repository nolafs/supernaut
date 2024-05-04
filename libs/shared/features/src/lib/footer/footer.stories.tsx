import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'features/Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary = {
  args: {},
};

export const Mobile: Story = {
  args: {},
};
