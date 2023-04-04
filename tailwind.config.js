/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'Regular, Medium, Semibold, Bold, ExtraBold']
    }
  },
  plugins: [],
}

