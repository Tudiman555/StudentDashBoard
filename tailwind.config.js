const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        100: "#f1f8f6",
        200: "#d4e9e2",
        300: "#008248",
        400: "#1e3932",
      },
      secondary: "#f3f1e7",
      grey: colors.gray,
      white: colors.white,
      black: colors.black,
      golden:"#CBA258",
    },
    fontFamily: {
      sans: " 'Helvetica Neue', Helvetica , Arial , sans-serif ",
    },
    extend: {
      letterSpacing : {
        wi: '.1em',
      },
      padding : {
        "four-three" : "133%",
        "7p" : ".4375rem",
        
      },
      backgroundImage: {
        heromobile:"url('/src/starmobile.webp')",
        herodesktop:"url('/src/stardesktop.webp')",
      },
      //
      fontSize : {
        "28p":["1.75rem"],
        '19p':["1.1875rem"]
      },
      spacing : {
        "72p":"4.5rem",
        '38p':"2.37rem",
        '51p':"3.1875rem",
        "50p" : "3.125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
