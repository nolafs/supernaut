import type { Meta } from '@storybook/react';

import { ContentColumn } from './content-column';

const meta: Meta<typeof ContentColumn> = {
  component: ContentColumn,
  tags: ['autodocs'],
  title: 'Features/Blocks/Content Column',
};
export default meta;

export const Intro = {
  args: {
    type: 'intro',
    title:
      "We're a full service independent brand and design studio traversing the worlds of entertainment and technology.",
    body: '<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>',
    label: 'See our work',
    url: '/',
    mode: 'dark'
  },
};

export const Left = {
  args: {
    type: 'text',
    body: '<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>',
    mode: 'dark',
    align: 'left',
  },
};

export const Right = {
  args: {
    type: 'text',
    body: '<p>Supernaut is a creative studio that designs and builds digital products for brands and startups.</p>',
    mode: 'dark',
    align: 'right',
  },
};
