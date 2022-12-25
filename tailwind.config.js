/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        pry: {
          DEFAULT: "#0C0E16",
          dark: "#FFFFFF",
        },
        sec: {
          DEFAULT: "#888EB0",
          dark: "#DFE3FA",
        },
        bgPry: {
          DEFAULT: "#F8F8FB",
          dark: "#141625",
        },
        bgSec: {
          DEFAULT: "#FFFFFF",
          dark: "#1E2139",
        },
        bgTert: {
          DEFAULT: "#373B53",
        },
        purple: {
          DEFAULT: "#7C5DFA",
          hover: "#9277FF",
          light: "#F9FAFE",
        },
        green: {
          DEFAULT: "#33D69F",
        },
        yellow: {
          DEFAULT: "#FF8F00",
        },
        gray: {
          DEFAULT: "#373B53",
        },
        gray2: {
          DEFAULT: "#494E6E",
        },
        gray3: "#DFE3FA",
        gray4: "#7E88C3",
        gray5: "#777F98",
        red: {
          DEFAULT: "#EC5757",
          light: "#FF9797",
        },
        input: {
          DEFAULT: "#DFE3FA",
          dark: "#252945",
        },
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
