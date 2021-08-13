module.exports = {
  purge: ['./src/**/*.html','./src/**/*.tsx','./src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Nunito", "sans-serif"],
    },
    
    extend: {
      colors : {
        nav : "#0e1726",
      },
      maxWidth: {
        "480p": "30rem",
      },

      padding: {
        y: "0.7143125rem",
        x: "2.857125rem",
        "11p": "0.6875rem",
        "25p": "1.5625rem",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/images/HeroImg.webp')",
      }),
      transitionProperty : {
          "width" : "width",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
