// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // <- importante
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#197A72",
          light: "#1fa88e",
          dark: "#11564f",
        },
      },
    },
  },
  plugins: [],
};
