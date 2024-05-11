import type { Meta } from '@storybook/react';
import { ContentProfileList } from './content-profile-list';

const meta: Meta<typeof ContentProfileList> = {
  component: ContentProfileList,
  title: 'Features/Blocks/Content Profile List',
};
export default meta;


export const Primary = {
  args: {
    mode: 'dark',
    items: [
      {
        id: '1',
        name: 'John Doe',
        title: 'Software Engineer',
        description: '<p>Previously at leading video game publisher square Enix, Kathryn has worked across many major brands including: Tomb Raider, Final Fantasy, Hitman and Kingdom Hearts.</p>' +
          '<p>Now she leverages her knowledge of brand development, consumer insight and AAA global launches with clients to arive their branas, devising deep out focused orane strateoles, campaion olannino & creative.</p>',
        image: 'https://via.placeholder.com/735x810',
        socials: [
          {
            id: '1',
            name: 'LinkedIn',
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/johndoe',
          }
        ]
      },
      {
        id: '2',
        name: 'John Doe',
        title: 'Software Engineer',
        description: 'John is a software engineer with a passion for developing web applications.',
        image: 'https://via.placeholder.com/735x810',
        socials: [
          {
            id: '1',
            name: 'LinkedIn',
            type: 'linkedin',
            url: 'https://www.linkedin.com/in/johndoe',
          }
        ]
      }
    ]
  },
};
