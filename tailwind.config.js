/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // color 추가
        background: "#f9fafb",
        backgroundDark: "#404258",
        brand: "#3f72af",
        brandDark: "#dbe2ef",
        danger: "#e76c6c",
        dangerDark: "#dbe2ef",
        shadow: "rgba(0, 0, 0, 0.5)",
      },
    },
    fontFamily: {
      // FontFamily 추가
      LOTTERIACHAB: ["LOTTERIACHAB"],
      LeeSeoyun: ["LeeSeoyun"],
    },
  },
  plugins: [],
  darkMode: "selector", // darkMode 추가
};
