import type { Meta } from '@storybook/react';
import { ContentVideo } from './content-video';


const meta: Meta<typeof ContentVideo> = {
  component: ContentVideo,
  title: 'Features/Blocks/Content Video',
};
export default meta;


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
    type: 'vimeo',
    title: 'video',
    src: 'https://vimeo.com/328435644',
  },
};


export const Coudinary = {
  args: {
    id: '1',
    type: 'video',
    title: 'video',
    src: 'fdwwgzb980yiwtitocgk',
  },
};
