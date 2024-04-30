import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

import {join} from 'path';
const tailwindConfigPath = join(__dirname, '../tailwind.config.js') // or your own config file
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath);


const config: StorybookConfig = {
  stories: [
    '../../shared/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    //join(__dirname, '../../../node_modules/storybook-tailwind-foundations/**/*.stories.js')
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-zeplin/register'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
