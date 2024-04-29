const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const supernautTheme = require('../../tailwind.preset.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [supernautTheme],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
