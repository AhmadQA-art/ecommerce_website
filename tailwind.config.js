const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // black
          light: '#FFFFFF', // white
          accent: '#FFFBEB', // amber-50
        },
        gray: {
          100: '#F3F4F6', // gray-100
          200: '#E5E7EB', // gray-200
          500: '#6B7280', // gray-500
          800: '#1F2937', // gray-800
        },
        success: '#059669', // green-600
        error: '#DC2626', // red-600
        warning: '#F59E0B', // amber-500
        info: '#2563EB', // blue-600
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        display: ['Montserrat', 'Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      spacing: {
        '4xl': '8rem',
        '3xl': '6rem',
        '2xl': '4rem',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}