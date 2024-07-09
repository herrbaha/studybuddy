/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlueSoft: "#006BA6",
        customBlue: "#0496FF",
        customYellow: "#FFBC42",
        customRed: "#D81159",
        customPurple: "#8F2D56",
        customLightBlue: "#F2F9FF",
      },
    },
  },
  plugins: [],
};
