import { m } from "framer-motion";

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./resources/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: '0.6rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    listStyleImage: {
      check: 'url("/resources/js/assets/img/icon_svg/check.svg")',
      nocheck: 'url("/resources/js/assets/img/icon_svg/nocheck.svg")',
    },
    extend: {
      colors:{
        'primary-brand': '#ff7f00',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};