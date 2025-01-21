/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glassWhite: 'rgba(255, 255, 255, 0.2)',
        glassBorder: 'rgba(255, 255, 255, 0.4)',
      },
      backdropBlur: {
        sm: '4px',
        lg: '16px',
      },
      spacing: {
        'input-height': '30px', // Custom height
        'input-width': '300px', // Custom width
      },
      boxShadow: {
        'shadow-custom': '0px 5px 10px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.2), -5px 0px 10px rgba(0, 0, 0, 0.1), 5px 0px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
