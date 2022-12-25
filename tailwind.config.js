/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        "dark-background": "#222831",
        "dark-background-2": "#393e46",
        "benitoite": '#1B2343',
        "text-color":"#eeeeee",
        "text-color-mix":"#757584"

      }
    },
  },
  plugins: [],
}
