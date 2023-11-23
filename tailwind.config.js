/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fog': "url('/src/assets/fog.jpg')",
        'bubble': "url('/src/assets/bubble.png')",
        'uni': "url('/src/assets/unicasebg.png')",
      }
    },
  },
  plugins: [],
}