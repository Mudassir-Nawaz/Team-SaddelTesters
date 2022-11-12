/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './layouts/*.html',
    './layouts/partials/*.html',
    './layouts/_default/*.html',
    './layouts/product/*.html'
  ],
  theme: {
    fontFamily: {
      poppins: ['poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
