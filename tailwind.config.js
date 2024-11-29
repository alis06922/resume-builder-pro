/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF735C",
          50: "#FFEDEB", // lightest
          100: "#FFD5CF",
          200: "#FFB6AB",
          300: "#FF9687",
          400: "#FF7E6F",
          500: "#FF735C", // base color
          600: "#E6624F",
          700: "#B84E3F",
          800: "#8A3B2F",
          900: "#5C281F", // darkest
        },
      },
    },
  },
  plugins: [],
};
