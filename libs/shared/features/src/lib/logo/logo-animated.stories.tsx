import type { Meta, StoryObj } from '@storybook/react';
import { LogoAnimated } from './logo-animated';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LogoAnimated> = {
  component: LogoAnimated,
  title: 'Logo',
};
export default meta;
type Story = StoryObj<typeof LogoAnimated>;

export const Animated = {
  args: {},
};
