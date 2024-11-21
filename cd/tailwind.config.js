/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f1',
          100: '#fae6e4',
          200: '#f5cfcb',
          300: '#eaada6',
          400: '#d67a70',
          500: '#c04b3f',
          600: '#8C271E', // Main brand color - Deep Red
          700: '#7a1f17',
          800: '#651b15',
          900: '#541916',
        },
        secondary: {
          50: '#f8f7f7',
          100: '#f1efee',
          200: '#CFCBCA', // Light Gray
          300: '#ABA194', // Warm Gray
          400: '#958a7d',
          500: '#857a6d',
          600: '#766b5f',
          700: '#625749',
          800: '#524a40',
          900: '#453e36',
        },
        neutral: {
          50: '#f9fafa',
          100: '#D9F7FA', // Light Cyan
          200: '#D8DDDE', // Cool Gray
          300: '#c3c9ca',
          400: '#a5adaf',
          500: '#8e979a',
          600: '#778185',
          700: '#63696c',
          800: '#535759',
          900: '#474a4c',
        }
      }
    },
  },
  plugins: [],
};