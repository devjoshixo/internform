/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'form-bg': '#f8f4e5',
      'form-shadow': '#ffa580',
      'form-primary-highlight': '#95a4ff',
      'form-secondary-highlight': '#ffc8ff',
      'font-color': '#2A293E',
      'error-highlight': 'rgba(255, 0, 0, 0.9)',
      'input-highlight': '#fff6af',
      button: '#000000',
      placeholder: '#fff',
    },
    extend: {
      keyframes: {
        slideIn: {
          '0%': { top: '-300px', opacity: 0, width: '0%', height: '0%' },
          '50%': { top: '-150px', opacity: 0.5, width: '50%', height: '50%' },
          '100%': { top: 0, opacity: 1, width: '100%', height: '100%' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.15s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
