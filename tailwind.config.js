module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      BebasNeue: ["Bebas Neue", "cursive"],
      DeltaGO: ["Dela Gothic One", "cursive"],
      IndieFlores: ["Indie Flower", "cursive"],
    },
    extend: {
      colors: {
        "brand-green": "#c9e265"
      },
    },
  },
  plugins: [],
};
