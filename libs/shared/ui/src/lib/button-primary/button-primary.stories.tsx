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
    onClick: {
      action: 'clicked',
    },
  }
};
export default meta;

type Story = StoryObj<typeof ButtonPrimary>;

export const Primary = {
  args: {
    label: 'Button label'
  },
};

export const IconButton = {
  args: {
    label: 'Button Icon'
  },
};
