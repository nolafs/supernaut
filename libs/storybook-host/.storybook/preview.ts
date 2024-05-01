import './global.scss';
import {Preview} from '@storybook/react';

export const parameters = {
  zeplinLink: "zpl://project?pid=662b6f544a37c6849a1b0f52",
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {name: 'Supernaut', value: '#000000'},
      {name: 'dark', value: '#000000'},
      {name: 'light', value: '#ffffff'},
    ],
  },
};

const preview: Preview = {
  parameters,
};

export default preview;
