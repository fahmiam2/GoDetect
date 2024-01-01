/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        darkPurple: "#260C1A",
        liver: "#5F4842",
        blueMunsell: "#068D9D",
        pictonBlue: "#00A7E1",
      },
      color: {
        darkPurple: "#260C1A",
        liver: "#5F4842",
        blueMunsell: "#068D9D",
        pictonBlue: "#00A7E1",
      },
      text: {
        darkPurple: "#260C1A",
        liver: "#5F4842",
        blueMunsell: "#068D9D",
        pictonBlue: "#00A7E1",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
