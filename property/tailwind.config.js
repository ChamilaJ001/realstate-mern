// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fd5631",
        secondary: "#6f6b7e",
      },
      screens: {
        sm: "768px",
        lg: "1103px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
