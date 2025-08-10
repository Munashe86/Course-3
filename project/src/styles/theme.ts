export const theme = {
  colors: {
    // Primary colors
    primary: {
      50: '#E6F0FF',
      100: '#CCE0FF',
      200: '#99C2FF',
      300: '#66A3FF',
      400: '#3385FF',
      500: '#0066FF', // Main primary color
      600: '#0052CC',
      700: '#003D99',
      800: '#002966',
      900: '#001433'
    },
    // Secondary colors
    secondary: {
      50: '#E6FFFD',
      100: '#CCFFFC',
      200: '#99FFF8',
      300: '#66FFF5',
      400: '#33FFF1',
      500: '#00FFE5', // Main secondary color
      600: '#00CCB8',
      700: '#00998A',
      800: '#00665C',
      900: '#00332E'
    },
    // Background colors
    background: {
      deep: '#1A1A2E', // Deep space background
      surface: '#16213E', // Surface color
      card: 'rgba(22, 33, 62, 0.95)' // Card background
    },
    // Text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8D0',
      accent: '#0066FF'
    },
    // Gradient combinations
    gradients: {
      primary: 'linear-gradient(to right, #0066FF, #00FFE5)',
      accent: 'linear-gradient(to right, #0066FF, #8A2BE2)'
    }
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)'
  }
};

export type Theme = typeof theme;