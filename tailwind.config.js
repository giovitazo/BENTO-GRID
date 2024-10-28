/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: 'rgb(223, 210, 255)', // HSL equivalent: hsl(254, 88%, 90%)
          500: 'rgb(127, 95, 194)',  // HSL equivalent: hsl(256, 67%, 59%)
        },
        yellow: {
          100: 'rgb(255, 244, 230)', // HSL equivalent: hsl(31, 66%, 93%)
          500: 'rgb(255, 200, 77)',  // HSL equivalent: hsl(39, 100%, 71%)
        },
        white: 'rgb(255, 255, 255)',  // HSL equivalent: hsl(0, 0%, 100%)
        black: 'rgb(18, 18, 18)',     // HSL equivalent: hsl(0, 0%, 7%)
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], // set DM Sans as a custom sans font
      },
      fontWeight: {
        normal: 400,
        medium: 500,
      },
    },
  },
  plugins: [],
}
