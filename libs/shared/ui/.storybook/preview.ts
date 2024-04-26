import {Preview} from '@storybook/react';

export const parameters = {
  zeplinLink: "zpl://project?pid=662b6f544a37c6849a1b0f52",
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'Supernaut', value: '#000000' },
      {name: 'dark', value: '#000000'},
    ],
  },
};

const preview: Preview = {
  parameters,
};

export default preview;
