/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans :"Golos Text"
      },
      colors: {
        gray01: "#4e4b66",
        gray02: "#6e7191",
        orange: "#f56e1e",
        orangelight: "#fce1d2",
        gray03: "#f8f8f8",
       
        gray05: "#f1f1f1",
        gray06: "#c2c4d2",
        gray07: "#a0a3bc",
        infobanner: "#fde9de",
        orange2: "#de5703",
        orange3: "#de4503",
        gray08: "#e8e8e8",
      },
    },
  },
  plugins: [],
};
