/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'], // Menambahkan font Satoshi
      },
      boxShadow: {
        '3d': '0 4px 0 #212121',
        '3d2': '0 6px 0 #21212160'
      }
    },
  },
  plugins: [],
}