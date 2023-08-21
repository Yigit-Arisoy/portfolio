/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: "#0A0B0F",
        bgSecond: "#141c26",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#66FCF1",
          secondary: "#45A29E",
          accent: "#64ffda",
          neutral: "#CCD6F6",
          "base-100": "#0B0C10",
        },
      },
    ],
  },
};
