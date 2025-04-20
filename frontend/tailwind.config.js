/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        'primary-dark': '#388E3C',
        dark: '#1b1b1b',
        light: '#d6d9da',
        grey: '#a3a7a9',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      aspectRatio: {
        '1': '1 / 1',
      },
    },
  },
  plugins: [],
} 