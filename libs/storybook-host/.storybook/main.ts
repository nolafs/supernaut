
const config: StorybookConfig = {
  stories: [
    '../../shared/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-zeplin/register',
  ],
  staticDirs: [
    {
      from: "../../../node_modules/geist/dist/fonts/geist-sans",
      to: "/fonts/geist-sans",
    },
    {
      from: "../../../node_modules/geist/dist/fonts/geist-mono",
      to: "/fonts/geist-mono",
    },
  ],
  framework: {
    //name: '@storybook/react-vite',
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });



    return config;
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
