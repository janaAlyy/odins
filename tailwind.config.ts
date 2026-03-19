import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        blue: "rgb(var(--blue-rgb) / <alpha-value>)",
        silver: "rgb(var(--silver-rgb) / <alpha-value>)",
        stroke: "rgb(var(--silver-rgb) / 0.18)"
      },
      borderRadius: {
        panel: "1.25rem"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif"
        ]
      },
      boxShadow: {
        panel: "0 8px 28px rgba(0, 0, 0, 0.28)",
        hover: "0 14px 34px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "odin-grid": "radial-gradient(circle at 1px 1px, rgba(184, 192, 204, 0.12) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
