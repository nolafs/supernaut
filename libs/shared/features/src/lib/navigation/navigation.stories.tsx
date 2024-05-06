import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './navigation';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: 'Features/Navigation',
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
  },
  decorators: [
    (Story) => (
      <div style={{height: '200vh'}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story/>
      </div>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Navigation>;

const defaultArgs = {
  siteTitle: 'Supernaut',
  logo: '/images/logo.svg',
  mode: 'dark',
  sticky: true,
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
      id: '1',
      name: 'instagram',
      url: 'https://twitter.com/supernaut',
      type: 'instagram',
    },
    {
      id: '2',
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

export const Mobile = {
  args: {
    ...defaultArgs
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
