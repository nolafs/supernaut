import type { Meta, StoryObj } from '@storybook/react';
import { SocialList } from './social-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SocialList> = {
  component: SocialList,
  title: 'ui/Social List',
};
export default meta;
type Story = StoryObj<typeof SocialList>;

export const Primary = {
  args: {
    className: 'text-white flex space-x-6 justify-center items-center',
    items: [
      {
        id: '1',
        url: 'https://www.facebook.com',
        type: 'facebook',
      },
      {
        id: '2',
        url: 'https://www.instagram.com',
        type: 'instagram',
      },
      {
        id: '3',
        url: 'https://www.twitter.com',
        type: 'twitter',
      },
    ],
  },
};
