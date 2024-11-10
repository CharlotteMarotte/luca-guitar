/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
    extend: {
      fontFamily: {
        heading: ['"Azeret Mono"', ...defaultTheme.fontFamily.sans],
        body: ["Questrial", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        paarl: "#A1662F",
        copper: "#C68F35",
        sand: "#EFCC8C",
      },
    },
  },
  plugins: [],
}

