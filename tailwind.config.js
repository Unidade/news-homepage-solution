/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    colors: {
      white: 'white',
      'soft-orange': 'hsl(var(--soft-orange) /  <alpha-value>)',
      'soft-red': 'hsl(var(--soft-red) /  <alpha-value>)',
      'off-white': 'hsl(var(--off-white) /  <alpha-value>)',
      'grayish-blue': 'hsl(var(--grayish-blue) /  <alpha-value>)',
      'dark-grayish-blue': 'hsl(var(--dark-grayish-blue) /  <alpha-value>)',
      'very-dark-blue': 'hsl(var(--very-dark-blue) /  <alpha-value>)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
