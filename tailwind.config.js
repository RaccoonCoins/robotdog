/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  corePlugins: {
    container: false
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'xs': '480px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        '2xl': '1440px',
        '3xl': '1650px',
      },
      colors: {
        "primary": "#2EC2DD",
        "secondary": "#04243A",
        "text": "#505050",
        "title": "#151E25",
        "cardBg": "#1E4C6A",
      }
    },
    fontFamily: {
      'airbolt': ['airbolt', 'sans-serif'],
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingInline: '15px',
          marginInline: 'auto',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
          '@screen 3xl': {
            maxWidth: '1680px',
          },
        }
      })
    }
  ],
}

