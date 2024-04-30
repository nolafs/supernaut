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
  args: {},
};
