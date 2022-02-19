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
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["inter"],
    },
  },
  plugins: [],
};
