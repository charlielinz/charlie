import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-playfair)", "serif"],
    },
    extend: {
      colors: {
        stone: {
          50: "#fafaf9",
          900: "#1c1917",
        },
        amber: {
          500: "#f59e0b",
          600: "#d97706",
        },
      },
      transitionDuration: {
        2000: "2000ms",
      },
      maxWidth: {
        "screen-xs": "480px",
        "screen-2xs": "375px",
      },
    },
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
