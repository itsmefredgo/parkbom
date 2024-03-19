import type { Config } from "tailwindcss";

const config: Config = {
  mode: "JIT",
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
      screens: {
        tablet: "768px",
        laptop: "1400px",
      },
      colors: {
        parkbomLightBg00: "#F2F1EB",
        parkbomLightBg01: "#F7F6F0",
        parkbomLightBg02: "#FCFBF5",
        parkbomLightBg03: "#FEFDF9",
        parkbomLightBg04: "#EEE7DA",
        parkbomDarkBg00: "#AFC8AD",
        parkbomDarkBg01: "#A7BD9F",
        parkbomDarkBg02: "#9FB291",
        parkbomDarkBg03: "#97A783",
        parkbomDarkBg04: "#88AB8E",
        parkbomLightText: "#FFFFFF",
        parkbomDarkText: "#000000",
      },
      after: {
        clipPath: {
          triangleRight: "polygon(0 0, 0 100%, 100% 50%)",
        },
      },
      animation: {
        "dark-mode": "dark-mode 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
