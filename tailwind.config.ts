import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary: "#C4C4C4",
        primary: "#11EFFF",
      },

      backgroundImage: {
        "gradient-cover": "#10101A",
      },
      keyframes: {
        proyectDark: {
          "0%": { color: "white" },
          "10%": { color: "rgb(255, 153, 0)" },
          "20%": { color: "rgb(217, 255, 0)" },
          "30%": { color: "rgb(145, 255, 0)" },
          "40%": { color: "rgb(0, 255, 128)" },
          "50%": { color: "rgb(0, 255, 128)" },
          "60%": { color: "rgb(25, 228, 126)" },
          "70%": { color: "#0CF0FF" },
          "80%": { color: "#0CF0FF" },
          "90%": { color: "#0CF0FF" },
          "100%": { color: "#0CF0FF" },
        },
        proyectLight: {
          "0%": { color: "rgb(253, 0, 0)" },
          "10%": { color: "rgb(255, 153, 0)" },
          "20%": { color: "rgb(199, 164, 9)" },
          "30%": { color: "rgb(170, 170, 170)" },
          "40%": { color: "rgb(109, 109, 109)" },
          "50%": { color: "rgb(255, 30, 0)" },
          "60%": { color: "rgb(165, 70, 7)" },
          "70%": { color: "#000000" },
          "80%": { color: "#000000" },
          "90%": { color: "#000000" },
          "100%": { color: "#000000" },
        },
      },
      animation: {
        proyectDark: "proyectDark 8s infinite",
        proyectLight: "proyectLight 8s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
