/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light" : "url('../public/home/light_bg.png')",
        "dark" : "url('../public/home/dark_bg.png')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
