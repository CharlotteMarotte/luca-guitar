/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      clipPath: {
        "curve-top": "ellipse(70% 50% at 50% 0)",
        "curve-bottom": "ellipse(70% 50% at 50% 100%)",
        wave: "polygon(0 50%, 100% 0%, 100% 100%, 0 100%)",
      },
      fontFamily: {
        heading: ["Quicksand", ...defaultTheme.fontFamily.sans],
        body: ["quicksand", ...defaultTheme.fontFamily.sans],
        Quicksand: ["quicksand"],
      },
      colors: {
        paarl: "#A1662F",
        copper: "#C68F35",
        sand: "#EFCC8C",
        spicyMustard: "#6B580A",
        sambuca: "#35210f",
        redWood: "#a45a52",
        darkRedWood: "#89030E",
        diSerria: "#D3A65B",
        cafeNoir: "#503F23",
        janna: "#f1e2ca",
        metallicCopper: "#7A2222",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".remove-arrow::-webkit-outer-spin-button, .remove-arrow::-webkit-inner-spin-button":
          {
            "-webkit-appearance": "none",
            margin: "0",
          },
        ".remove-arrow": {
          "-moz-appearance": "textfield",
        },
      });
    },
  ],
};
