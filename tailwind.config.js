/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-main-height": "calc(100svh - 112px)",
      },
      colors: {
        primary: {
          50: "#FFEBE5",
          100: "#FFD3CB",
          200: "#FFB8A2",
          300: "#FF9E79",
          400: "#FF8250",
          500: "#004B93", // Base color
          600: "#004B93",
          700: "#FF4E34",
          800: "#FF3D1F",
          900: "#FF2D0B",
        },
        secondary: {
          DEFAULT: "#193e7c",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
