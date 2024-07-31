import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      siab: "#f35c7a",
      white: "#FFFFFF",
      lightGray: "#fcfcfd",
      mdGray: "##c0bdc6",
      gray: "#aba6b3",
      darkGray: "#4d4d4d",
      blue: "#0062cc",
      black: "#000",
      yellow: "#FEE715",
      pink: "#FB7299",
      lightPink: "#F9EFFF",
      lightBlue: "#E0F2FF",
      lightPurple: "#F3E9FF",
    },
  },
  plugins: [],
};
export default config;
