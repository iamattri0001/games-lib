/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#242132",
        "background-muted": "#4b456a",

        accent: {
          50: "#edefff",
          100: "#dee1ff",
          200: "#c4c7ff",
          300: "#a1a3ff",
          400: "#746cfe",
          500: "#705cf8",
          600: "#623eed",
          700: "#5531d1",
          800: "#452aa9",
          900: "#3a2a85",
          950: "#24194d",
        },

        ui: {
          50: "#f6f3ff",
          100: "#eee9fe",
          200: "#dfd6fe",
          300: "#c8b5fd",
          400: "#ae8cfa",
          500: "#945cf6",
          600: "#863aed",
          700: "#7728d9",
          800: "#6321b6",
          900: "#531d95",
          950: "#331065",
        },
      },
    },
  },
  plugins: [],
};
