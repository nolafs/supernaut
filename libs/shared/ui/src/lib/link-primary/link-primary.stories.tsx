import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { LinkPrimary } from './link-primary';

//import { within } from '@storybook/testing-library';
//import { expect } from '@storybook/jest';

const meta: Meta<typeof LinkPrimary> = {
  component: LinkPrimary,
  title: 'UI/Link',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {type: 'radio'},
      options: ['sm', 'md', 'lg'],
    },
    hasIcon: {
      control: {type: 'boolean'},
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkPrimary>;

const Default = {
  args: {
    children: 'Link label',
    size: 'md',
    url: '/',
    hasIcon: false,
    isDisabled: false,

  },
}

export const Primary = {
  args: {
    ...Default.args,
    size: 'md',
    hasIcon: true
  },
};
