module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slidein-left": "slideInLeft 1500ms ease-in-out",
        "slidein-right": "slideInRight 1500ms ease-in-out",
        "fade-in": "fadeIn 3000ms linear",
        "name1-fade-in": "name1FadeIn 6000ms linear 1500ms infinite",
        "name2-fade-in": "name2FadeIn 6000ms linear 4500ms infinite",
      },
      keyframes: {
        slideInLeft: {
          from: {
            width: "100vw",
          },
          to: {
            width: "67vw",
          },
        },
        slideInRight: {
          from: {
            "margin-left": "100%",
          },
          to: {
            "margin-left": "0%",
          },
        },
        fadeIn: {
          "0%, 50%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          },
        },
        name1FadeIn: {
          "0%": {
            content: "'CHARLIE'",
            opacity: "0%",
          },
          "25%": {
            content: "'CHARLIE'",
            opacity: "100%",
          },
          "49%": {
            content: "'CHARLIE'",
            opacity: "1%",
          },
          "50%": {
            content: "''",
            opacity: "0%",
          },
        },
        name2FadeIn: {
          "0%": {
            content: "'EILRAHC'",
            opacity: "0%",
          },
          "25%": {
            content: "'EILRAHC'",
            opacity: "100%",
          },
          "49%": {
            content: "'EILRAHC'",
            opacity: "1%",
          },
          "50%": {
            content: "''",
            opacity: "0%",
          },
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
