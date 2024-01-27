/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8424C4",
          "secondary": "#504099",
          "accent": "#03DAC6",
          "neutral": "#ffffff",
          "base-100": "#1E1F26",
          "info": "#ffffff",
          "success": "#86efac",
          "warning": "#f43f5e",
          "error": "#eab308",
        },
      },
    ],
  },
}
