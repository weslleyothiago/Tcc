/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'funky-bubble': ['"Funky Bubble"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
