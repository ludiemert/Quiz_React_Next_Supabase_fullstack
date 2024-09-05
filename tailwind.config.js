/** @type {import('tailwindcss').Config} */

//const themeColors = require('./colors.js'); // Importe suas cores personalizadas

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      zIndex: {
        99999: 99999,
        90000: 90000,
        80000: 80000,
      },

      fontWeight: {
        heading: '700', // 'bold'
        subheading: '600', // 'semibold'
        button: '600', // 'semibold'
        link: '400', // 'regular'

        light: '300', // Ajuste para o valor numérico correto, se necessário
        normal: '400', // Ajuste para o valor numérico correto, se necessário
        semibold: '600', // Ajuste para o valor numérico correto, se necessário
        bold: '700', // Ajuste para o valor numérico correto, se necessário
      },
      lineHeight: {
        4: '1rem', // 16px
        6: '1.5rem', // 24px
        10: '2.5rem', // 40px
        11: '3rem', // 48px
        20: '4.5rem', // 72px
        22: '6rem', // 96px
      },
      spacing: {
        4: '1rem', // 16px usado para margens e padding também
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        11: '3rem', // 48px
        12: '4rem', // 64px
        22: '6rem', // 96px
      },

      screens: {
        'sm-phone': '390px',
        'md-tablet': '768px',
        'xl-desktop': '1280px',
        '2xl-desktop': '1920px',
      },
    },
  },
  plugins: [],
};
