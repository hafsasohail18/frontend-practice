module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        brand: "#FF764D",
        blue: "#0000ff",
        yellow: "#fbffa7",
        green: "#b6ffc0",
        purple: "#d5b3ff",
        lightblue: "#b1c5ff",
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }