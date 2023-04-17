/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '310px',
      sm: '360px',
      md: '760px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#7161EF',
        'secondary': '#E2E8F0',
        'success': '#4BD120',
        'error': '#D14A20',
        'text-primary': '#E2E8F0',
        'text-secondary': '#94a3b8'
      }
    },
  },
  plugins: [],
}
