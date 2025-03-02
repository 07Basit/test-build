/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '500px',
      },
      colors: {
        primary: {
          DEFAULT: '#0D452A',
          light: '#165c39',
          dark: '#093720',
        },
        accent: '#EB4E1E',
        lightgreen: '#F8FFF5',
        mint: '#F5FFF5',
        navy: '#1F2347',
        navylight: '#3F4678',
        aqua: '#A5DEDF',
        background: '#F5F5F5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        'gradient-x': 'gradient-x 15s ease infinite',
      },
    },
  },
  plugins: [],
};