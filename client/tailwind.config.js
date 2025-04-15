/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['Cyberjunkies', 'sans-serif'],
        Ocr : ['OCR ' , 'sans-serif'],
      },
      backgroundImage: {
        'home-bg': "url('/src/home_background.png')", // relative to the CSS file
      },
    },
  },
  plugins: [],
}