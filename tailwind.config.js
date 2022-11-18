/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '450px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#a991f7",
            secondary: "#f6d860",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
}
