/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
        bg: '#30A3DA'
      },
      fontFamily: {
        sans: ["'InterVariable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // ...
  ]
}