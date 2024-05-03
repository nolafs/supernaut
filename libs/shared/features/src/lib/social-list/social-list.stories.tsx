import type { Meta, StoryObj } from '@storybook/react';
import { SocialList } from './social-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SocialList> = {
  component: SocialList,
  title: 'SocialList',
};
export default meta;
type Story = StoryObj<typeof SocialList>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SocialList!/gi)).toBeTruthy();
  },
};
