/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'grey':"#4C4C4C",
      'light-grey': "#818181"
    },
    fontFamily: {
      britannica: ['Britanica-Heavy', 'sans-serif'], // Add your custom font
    }
    },
 
  },
  plugins: [],
}