module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sixCaps: ['"Six Caps"', 'sans-serif'], // Add Six Caps font here
        Orbitron: ['"Poppins"', 'sans-serif'], // Add Orbitron font here
      },
    },
  },
  plugins: [],
};
