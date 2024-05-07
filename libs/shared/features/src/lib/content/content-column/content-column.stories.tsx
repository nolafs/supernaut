import type { Meta, StoryObj } from '@storybook/react';
import { ContentColumn } from './content-column';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ContentColumn> = {
  component: ContentColumn,
  title: 'Features/Blocks/Content Column',
};
export default meta;
type Story = StoryObj<typeof ContentColumn>;

export const Intro = {
  args: {
    title:
      "We're a full service independent brand and design studio traversing the worlds of entertainment and technology.",
    body: '<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>',
    label: 'See our work',
    url: '/',
  },
};

export const Left = {
  args: {},
};

export const Right = {
  args: {},
};
