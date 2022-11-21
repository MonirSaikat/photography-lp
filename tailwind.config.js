/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pricing-bg': './'
      },
      colors: {
        primary: '#cc8e75'
      }
    },
  },
  plugins: [],
}