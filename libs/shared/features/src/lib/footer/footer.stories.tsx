import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Features/Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

const defaultArgs = {
  strapline: 'Say Hello.',
  mode: 'dark',
  copyright: '© 2021 Supernaut Ltd. All rights reserved.',
  contactButtonLabel: 'info@supernaut.com',
  legal: [
    {
      id: '1',
      pageName: 'Cookie Policy',
      url: '/',
    },
    {
      id: '2',
      pageName: 'Privacy Policy',
      url: '/legal',
    },
  ],
  social: [
    {
      id: '1',
      name: 'Instagram',
      url: 'https://twitter.com/supernaut',
      type: 'instagram',
    },
    {
      id: '2',
      name: 'Linkedin',
      url: 'https://facebook.com/supernaut',
      type: 'linkedin',
    },
  ],
};

export const Primary = {
  args: {
    ...defaultArgs,
  },
};

export const Mobile = {
  args: {
    ...defaultArgs,
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
