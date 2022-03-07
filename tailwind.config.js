module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen: {
        xs: "480px",
      },
      backgroundImage: {
        herobanner: "url('../public/img/herobanner.jpg')",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      maxWidth: {
        "screen-xs": "480px",
        "screen-2xs": "375px",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["inter"],
    },
  },
  plugins: [],
};
