import './global.scss';
import {Preview} from '@storybook/react';
import localFont from "next/font/local";

const GeistSans = localFont({
  src: "./fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist-sans",
});

const GeistMono = localFont({
  src: "./fonts/geist-mono/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
});


export const parameters = {
  zeplinLink: "zpl://project?pid=662b6f544a37c6849a1b0f52",
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'fullscreen',
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
  decorators: [
    (Story) => (
      <div className={`${GeistMono.variable} ${GeistSans.variable}`}>
        <Story/>
      </div>
    ),
  ],
};

export default preview;
