/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'heading': ['Righteous', 'cursive']
      },
      backgroundImage: {
        'pricing-bg': `url('./img/pricing.jpg')`
      },
      colors: {
        primary: '#cc8e75',
        overlay: `rgba(0,0,0,0.7)`
      }
    },
  },
  plugins: [],
}