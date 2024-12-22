module.exports = {
  purge: ["./index.html", "./js/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        green: {
          100: "#d4f5e3",
          500: "#38a169",
        },
        blue: {
          100: "#d1e8ff",
          500: "#3182ce",
        },
        yellow: {
          100: "#fff3c4",
          500: "#ecc94b",
        },
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-out",
        "slide-in": "slideIn 1.5s ease-out",
        "zoom-in": "zoomIn 1s ease-out",
        "bounce-slow": "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
