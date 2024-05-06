import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Section } from './section';

const meta: Meta<typeof Section> = {
  component: Section,
  title: 'UI/Section',
};
export default meta;
type Story = StoryObj<typeof Section>;

export const Primary = {
  args: {},
};
