import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './contact-form';

const meta: Meta<typeof ContactForm> = {
  component: ContactForm,
  title: 'Features/Contact Form',
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Primary = {
  args: {},
};
