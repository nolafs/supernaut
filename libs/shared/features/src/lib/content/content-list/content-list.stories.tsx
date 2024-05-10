import type { Meta, StoryObj } from '@storybook/react';
import { ContentList } from './content-list';

const meta: Meta<typeof ContentList> = {
  component: ContentList,
  title: 'Features/Blocks/Content List',
};
export default meta;
type Story = StoryObj<typeof ContentList>;

export const Primary = {
  args: {
    title: 'Our Services',
    items: {
      items: [
        {
          id: '1',
          title: 'Brand Strategy',
          items: ['Market Analysis', 'Consumer Insights', 'Brand Strategy', 'Brand Positioning', 'Brand Identity', 'Naming', 'Brand Architecture', 'Brand Guidelines', 'Brand Management', 'Communication Plan', 'Key Messaging', 'Creative Strategy', 'Copywriting', 'Client Workshops'],
        },
        {
          id: '2',
          title: 'Design and Creative',
          items: [
            'Logo Design',
            'Visual Identity',
            'Brand Collateral',
            'Packaging Design',
            'Print Design',
            'Digital Design',
            'Web Design',
            'UI/UX Design',
            'Motion Graphics',
            'Illustration',
            'Photography',
            'Video Production',
            'Client Workshops',
          ],
        },
      ],
    },
  },
};
