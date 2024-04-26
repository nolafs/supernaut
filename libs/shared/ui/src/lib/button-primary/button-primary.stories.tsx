import type { Meta, StoryObj } from '@storybook/react';
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
  args: {},
};
