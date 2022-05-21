module.exports = {
  content: ["./src/**/*.{html,js}"],

  daisyui: {
    themes: [
      {
        light: {
          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      },
      {
        mytheme: {

          "primary": "#570DF8",

          "secondary": "#F000B8",

          "accent": "#37CDBE",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
