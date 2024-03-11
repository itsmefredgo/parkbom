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
      colors: {
        // parkbom00: "#ffffff", // Gray theme
        // parkbom01: "#f8f9f8",
        // parkbom02: "#e0ffe0",
        // parkbom03: "#d9d9d9",
        // parkbom04: "#cccccc",
        // parkbom05: "#bfbfbf",
        // parkbom06: "#b3b3b3",
        // parkbom07: "#a6a6a6",
        // parkbom08: "#999999",
        // parkbom09: "#8c8c8c",
        // parkbom10: "#808080",
        // parkbom11: "#737373",
        // parkbom12: "#666666",
        // parkbom13: "#595959",
        // parkbom14: "#4d4d4d",
        // parkbom15: "#404040",
        // parkbom16: "#333333",
        // parkbom17: "#262626",
        // parkbom18: "#1a1a1a",
        // parkbom19: "#0d0d0d",
        // parkbom20: "#000000",
        // parkbom00: "#ffffff", // Lightest mixed
        // parkbom01: "#f8f9f8", // Mixed
        // parkbom02: "#e0ffe0", // Mixed
        // parkbom03: "#d9d9d9",
        // parkbom04: "#cccccc",
        // parkbom05: "#bfbfbf", // Mixed
        // parkbom06: "#b3b3b3",
        // parkbom07: "#a6a6a6",
        // parkbom08: "#999999",
        // parkbom09: "#8c8c8c",
        // parkbom10: "#808080", // Mixed
        // parkbom11: "#737373",
        // parkbom12: "#666666",
        // parkbom13: "#595959",
        // parkbom14: "#4d4d4d", // Mixed
        // parkbom15: "#404040",
        // parkbom16: "#333333", // Mixed
        // parkbom17: "#262626",
        // parkbom18: "#1a1a1a", // Mixed
        // parkbom19: "#0d0d0d",
        // parkbom20: "#000000", // Darkest mixed
        // parkbom00: "#afc8ad", // Darkest #AFC8AD theme
        // parkbom01: "#b4cfae",
        // parkbom02: "#bac5b0",
        // parkbom03: "#c0ccb2",
        // parkbom04: "#c6d3b4",
        // parkbom05: "#ccd9b5",
        // parkbom06: "#d2e0b7",
        // parkbom07: "#d8e6b9",
        // parkbom08: "#deedbb",
        // parkbom09: "#e4f3bd",
        // parkbom10: "#eafac0", // Lightest #AFC8AD theme
        // parkbom11: "#eee9d2", // Lightest #EEE7DA theme
        // parkbom12: "#f0ecd6",
        // parkbom13: "#f3f0da",
        // parkbom14: "#f6f4de",
        // parkbom15: "#f9f7e2",
        // parkbom16: "#fcfae6",
        // parkbom17: "#fefce9",
        // parkbom18: "#fefdfb",
        // parkbom19: "#fefeff",
        // parkbom20: "#eee7da", // Darkest #EEE7DA theme
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
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
