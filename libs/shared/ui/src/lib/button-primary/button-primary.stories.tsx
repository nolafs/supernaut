import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from './button-primary';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
  title: 'ButtonPrimary',
};
export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ButtonPrimary!/gi)).toBeTruthy();
  },
};
