module.exports = {
  content: ["./public/dist/**/*.{html,js}"],
  theme: {
    extend: {
        colors : {
          "kandangku-primary": "#F20000",
          "kandangku-primary-800": "#D10000",
          "kandangku-soft-primary": "#FFE2E2",
          "kandangku-secondary": "#FF5F01",
          "kandangku-text-dark": "#211B3D",
          "border-color": "#EAE8F5",
          "paragraf-color": "#5B5575",
        },
        lineHeight : {
          'heroLineHight' : '64px',
        }
    },
    boxShadow : {
        navbarShadow : '0px 6px 60px rgba(22, 28, 51, 0.06)',
        cardShadow : '0px 2px 10px rgba(0, 0, 0, 0.06), 0px 0.835552px 31.3332px rgba(0, 0, 0, 0.0431313), 0px 0.446726px 16.7522px rgba(0, 0, 0, 0.0357664), 0px 0.250431px 9.39116px rgba(0, 0, 0, 0.03), 0px 0.133002px 4.98758px rgba(0, 0, 0, 0.0242336), 0px 0.0553451px 2.07544px rgba(0, 0, 0, 0.0168687)'
    },
    fontFamily : {
      Poppins : ["Poppins, sans-serif"],
    },
    container : {
      center : true,
      padding : "1rem",
      screens : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
