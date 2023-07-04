/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Oswald"],
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "420px" },
      xs: { max: "320px" },
    },
    colors: {
      primary: "#867070",
      secondary: "#F2F2F2",
    },
  },
  plugins: [],
};
