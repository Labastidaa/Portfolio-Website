/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // It will compile css on the fly.
  // Purge any unused css
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custGreen: '#00B412',
        custLightGreen: '#D9FEA0',
        custDarkGreen: '#0A1E22',
        custPurple: '#250236',
        custDarkGray: '#212121'
      },
      fontFamily:{
        'Inter': ['Inter', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
