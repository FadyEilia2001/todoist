/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01ff70",
        secondary: "#2ECC40",
        darkNavyBlue: "#001f3f",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
