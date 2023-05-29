/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "verdana", "sans-serif"],
      },
    },
    colors: {
      "deep-purple": "#181921",
      lightning: "#DED1ED",
      "lightning-cloud": "#D2B9FB",
      black: "black",
      white: "white",
      mainbg: "#2D3748",
      navbar: "#D9D9D9",
      aqua: "#03e9f4",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
