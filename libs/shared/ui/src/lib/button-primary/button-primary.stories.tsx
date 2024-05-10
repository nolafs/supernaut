import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ButtonPrimary } from './button-primary';

const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
  tags: ['autodocs'],
  title: 'ui/Button Primary',
};
export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

const Default = {
  args: {
    label: 'Button label',
    size: 'md',
    url: '/',
    hasIcon: false,
  },
};

export const Primary = {
  args: {
    ...Default.args,
    size: 'md',
    hasIcon: true,
  },
};
