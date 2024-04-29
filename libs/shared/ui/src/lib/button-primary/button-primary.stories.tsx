import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ButtonPrimary } from './button-primary';

const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
  title: 'ButtonPrimary',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    size: {
        control: {type: 'radio'},
        options: ['sm', 'md', 'lg'],
    },
    onClick: {
      action: 'clicked',
    },
  }
};
export default meta;

type Story = StoryObj<typeof ButtonPrimary>;

const Default = {
  args: {
    label: 'Button label',
    size: 'md',
    hasIcon: false,
    isDisabled: false,

  },
}

export const Primary = {
  args: {
    ...Default.args,
    label: 'Button label',
    size: 'md',
    hasIcon: true
  },
};

export const Standard = {
  args: {
    ...Default.args,
    label: 'Button Click',
    hasIcon: false,
    size: 'lg',
  },
};
