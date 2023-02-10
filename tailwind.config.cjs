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
      fontFamily:{
        'Inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
