import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Header } from './header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'UI/Header',
  argTypes: {
    id: { control: 'text' },
    pageName: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    description: { control: 'text' },
    columnLayout: { control: 'boolean' },
    mode: { control: 'radio', options: ['light', 'dark'] },
    marginTop: { control: 'boolean', defaultValue: true },
    marginBottom: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const PageHeader = {
  args: {
    pageName: 'Work',
    title: 'Work.',
    mode: 'dark',
  },
};

export const PageDescription = {
  args: {
    pageName: 'Work',
    title:
      "We've built brands that are beloved by communities all over the world..",
    mode: 'dark',
  },
};

export const PageSubtitleDescription = {
  args: {
    pageName: 'Neonhive',
    title: 'Neonhive',
    subtitle:
      'Creating a personal brand identity for the marketing leaders in the indie games scene.',
    description:
      '<ul><li>Brand Identity</li><li>Web Design</li><li>Illustration</li></ul>',
    mode: 'dark',
    columnLayout: true,
  },
};
