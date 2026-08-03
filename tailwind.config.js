/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0d1210",
        basedeep: "#0a0f0d",
        panel: "#1e2b28",
        panelmute: "#161b19",
        gold: "#c9a961",
        rust: "#8b3a2f",
        ink: "#e8e4d9",
        inkmute: "#9b9488",
        inkfaint: "#6b6459",
      },
    },
  },
  plugins: [],
};
