/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        54: ".74",
        colors: {
          blue: "#002147",
          eventBg: "#7880DF",
          NBlue: "#180d5b",
        },
      },
    },
  },
  plugins: [],
};
