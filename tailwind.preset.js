const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
//tailwind.preset.js

module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      xs: '360px',
      sm: '414px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1920px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        md: '2rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      normal: '1.1rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      red: colors.red,
      primary: colors.white,
      secondary: '#acacac',
      accent: '#E62997',
      neutral: '#191919',
      base: '#000000',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css:{
            color: theme('colors.secondary'),
          },
        },
        sm: {
          css: {
            lineHeight: '1rem',
          }
        },
        base: {
          css: {
            lineHeight: '1.4rem',
          }
        },
        lg: {
          css: {
            lineHeight: '1.25rem',
          }
        },
        xl: {
          css: {
            lineHeight: '1.5rem',
          }
        },
        '2xl': {
          css: {
            lineHeight: '1.75rem',
          }
        },
      }),
      maxWidth: {
        ...defaultTheme.maxWidth,
        '8xl': '90rem',
        '9xl': '120rem',
      },
    },
  },
  safelist: [],
  variants: {
    // Your variant configurations
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
