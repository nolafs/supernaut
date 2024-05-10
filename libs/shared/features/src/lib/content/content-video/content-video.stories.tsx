import type { Meta, StoryObj } from '@storybook/react';
import { ContentVideo } from './content-video';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ContentVideo> = {
  component: ContentVideo,
  title: 'Features/Blocks/Content Video',
};
export default meta;
type Story = StoryObj<typeof ContentVideo>;

export const YouTube = {
  args: {
    id: '1',
    type: 'youtube',
    title: 'video',
    src: 'https://www.youtube.com/watch?v=M7jgxJ_4TJs',
  },
};

export const Vimeo = {
  args: {
    id: '1',
    type: 'youtube',
    title: 'video',
    src: 'https://vimeo.com/328435644',
  },
};
