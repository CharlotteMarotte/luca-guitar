/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 2s ease-in forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      },
      clipPath: {
        'curve-top': 'ellipse(70% 50% at 50% 0)',
        'curve-bottom': 'ellipse(70% 50% at 50% 100%)',
        wave: 'polygon(0 50%, 100% 0%, 100% 100%, 0 100%)'
      },
      fontFamily: {
        quicksand: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#9a5e1a',
        secondary: '#C68F35',
        secondaryLight: '#D3A65B',
        secondaryDark: '#b07627',
        neutralLight: '#ead1b6',
        neutralMedium: '#ddbb93',
        accent: '#703510',
        accentDark: '#673320',
        textLight: '#F5ECE0',
        textMedium: '#C8AF85',
        textDark: '#372912',
        success: '#6E7D3E',
        error: '#a45a52'
      }
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.remove-arrow::-webkit-outer-spin-button, .remove-arrow::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
          margin: '0'
        },
        '.remove-arrow': {
          '-moz-appearance': 'textfield'
        }
      })
    }
  ]
}
