/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#274C77",
      light: "#E7ECEF",
    },

    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        bitter: ["Bitter", "serif"],
      },
      screens: {
        lopsidedScreen: { raw: "(max-height: 500px)" },
        // => @media (max-height: 500px) { ... }
      },
    },
  },
  plugins: [],
};
