/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(.9)" },
        },
      },
      animation: {
        ripple: "ripple 2s ease infinite",
      },
    },
  },
  plugins: [],
};
