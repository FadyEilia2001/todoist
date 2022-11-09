/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6E6E6E",
        secondary: "#bcfd4c",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
