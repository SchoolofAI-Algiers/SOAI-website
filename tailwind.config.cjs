/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        54: ".74",
      },
      colors: {
        blue: "#0F064E",
        eventBg: "#7880DF",
      },
      animation: {
        "brain-move": "keyf 3.5s infinite",
      },
      keyframes: {
        keyf: {
          "0%": {
            transform: "translateY(-20%)",
            opacity: 1,
          },
          "50%": {
            transform: "translate(0)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateY(-20%)",
            translateY: 0.25,
            opacity: 1,
          },
        },
      },
    },
  },

  plugins: [],
};
