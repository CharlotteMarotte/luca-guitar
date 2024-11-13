/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        "curve-top": "ellipse(70% 50% at 50% 0)",
        "curve-bottom": "ellipse(70% 50% at 50% 100%)",
        wave: "polygon(0 50%, 100% 0%, 100% 100%, 0 100%)",
      },
      fontFamily: {
        heading: ["Philosopher", ...defaultTheme.fontFamily.sans],
        body: ["Mulish", ...defaultTheme.fontFamily.sans],
        handwritten: ["Homemade Apple"],
      },
      colors: {
        paarl: "#A1662F",
        copper: "#C68F35",
        sand: "#EFCC8C",
        spicyMustard: "#6D5A0A",
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
