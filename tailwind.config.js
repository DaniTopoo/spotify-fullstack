/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        body: "#000",
        module: "#121212",
        box: "#222222",
        piece: "#393939",
        heading: "#fff",
        font: "#a7a7a7",
      },
    },
  },
  plugins: [],
};
