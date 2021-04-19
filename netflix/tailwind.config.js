module.exports = {
  mode: "jit",

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        netflix: "#E50814",
      },
      fontFamily: {
        netflix: ["Netflix Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
