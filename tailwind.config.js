/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Courgette: ["Courgette", "cursive"],
        Arsenal: ["Arsenal SC", "sans-serif"]
      },
      animation: {
        "zoom-in-out": "zoomInOut 4s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out",
        "fade-out": "fadeOut 1s ease-in",
      },
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};

