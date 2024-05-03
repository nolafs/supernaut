import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './navigation';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: 'features/Navigation',
  argTypes: {
    siteTitle: {
      control: {
        type: 'text',
      },
    },
    logo: {
      control: {
        type: 'text',
      },
    },
    items: {
      control: {
        type: 'object',
      },
    },
    social: {
      control: {
        type: 'object',
      },
    },
  }
};
export default meta;
type Story = StoryObj<typeof Navigation>;

const defaultArgs = {
  siteTitle: 'Supernaut',
  logo: '/images/logo.svg',
  mode: 'dark',
  items: [
    {
      id: '1',
      pageName: 'Work',
      url: '/',
    },
    {
      id: '2',
      pageName: 'About',
      url: '/about',
    },
    {
      id: '3',
      pageName: 'Contact',
      url: '/contact',
    },
  ],
  social: [
    {
      name: 'instagram',
      url: 'https://twitter.com/supernaut',
      type: 'instagram',
    },
    {
      name: 'linkedin',
      url: 'https://facebook.com/supernaut',
      type: 'linkedin',
    },
  ],
};

export const Primary = {
  args: {
    ...defaultArgs
  },
};

export const Mobile: Story = {
  args: {
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};