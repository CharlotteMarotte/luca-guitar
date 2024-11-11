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
        heading: ['"Azeret Mono"', ...defaultTheme.fontFamily.sans],
        body: ["Questrial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        paarl: "#A1662F",
        copper: "#C68F35",
        sand: "#EFCC8C",
        spicyMustard: "#6D5A0A",
        sambuca: "#35210f",
      },
    },
  },
  plugins: [],
};
