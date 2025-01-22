/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'grey':"#4C4C4C",
      'light-gray': "#818181"

    }
  },
  plugins: [],
}