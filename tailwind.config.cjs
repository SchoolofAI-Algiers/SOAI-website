/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        54: ".74",
      },
      colors: {
        blue: "#190E5C",
        eventBg: "#7880DF",
      },
    },
  },

  plugins: [],
};
