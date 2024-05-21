const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const theme = require('tailwindcss/defaultTheme');
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
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue,
      error: colors.red['600'],
      primary: 'var(--color-primary)',
      lines: 'var(--color-lines)',
      secondary: 'var(--color-secondary)',
      accent: 'var(--color-accent)',
      neutral: 'var(--color-neutral)',
      base: 'var(--color-base)',
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css:{
            color: theme('colors.primary'),
            h1: {
              color: theme('colors.primary'),
            },
            h2: {
              color: theme('colors.primary'),
            },
            h3: {
              color: theme('colors.primary'),
            },
            h4: {
              color: theme('colors.primary'),
            },
            h5: {
              color: theme('colors.primary'),
            },
            h6: {
              color: theme('colors.primary'),
            },
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
    "prettier-plugin-tailwindcss",
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
