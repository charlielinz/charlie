module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        "2000": "2000ms",
      },
      maxWidth: {
        "800": "800px",
      },
      height: {
        "mobile-screen": "calc(var(--vh, 1vh) * 100)",
      }
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["inter"],
    },
  },
  plugins: [],
};
