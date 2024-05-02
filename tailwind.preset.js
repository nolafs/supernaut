const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
//tailwind.preset.js

module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      xs: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px",
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      'primary': colors.white,
      'secondary': "#acacac",
      'accent': "#E62997",
      'neutral': "#191919",
      'base': "#000000",
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
