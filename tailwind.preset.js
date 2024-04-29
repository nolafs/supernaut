const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
//tailwind.preset.js

module.exports = {
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      "body": "var(--font-inter)",
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      'primary': colors.white,
      'secondary': "#acacac",
      'accent': "#FFA500",
      'neutral': "#191919"
    },
  },
  safelist: [
  ],
  variants: {
    // Your variant configurations
  },
  plugins: [
    // Your custom plugins
  ],
};