module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        logo: ["Marck Script", "cursive"],
      },
      colors: {
        'primary': '#da0064',
      },
      fill: {
        'primary': '#da0064',
      },
    },
  },
  plugins: [],
}
