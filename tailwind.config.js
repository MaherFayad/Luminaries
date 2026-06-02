/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#8ed0fa",
          400: "#59b4f5",
          500: "#3496ed",
          600: "#1a76d2",
          700: "#165fae",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
        },
      },
      fontFamily: {
        arabic: ['"Cairo"', '"Noto Sans Arabic"', "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
