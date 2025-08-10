/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A1628',
        'surface': '#0F2137',
        'card-bg': 'rgba(15, 33, 55, 0.95)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        primary: {
          50: '#E6F6FF',
          100: '#CCE9FF',
          200: '#99D4FF',
          300: '#66BEFF',
          400: '#33A9FF',
          500: '#0093FF',
          600: '#0076CC',
          700: '#005899',
          800: '#003B66',
          900: '#001D33'
        },
        accent: {
          50: '#E6FAFF',
          100: '#CCF4FF',
          200: '#99E9FF',
          300: '#66DFFF',
          400: '#33D4FF',
          500: '#00C9FF',
          600: '#00A1CC',
          700: '#007999',
          800: '#005066',
          900: '#002833'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0093FF 0%, #00C9FF 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  plugins: [],
};