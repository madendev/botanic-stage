import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-geist-sans)"],
        display: ["var(--font-barlow-condensed)"],
        ui: ["var(--font-montserrat)"],
      },
      colors: {
        "accent-cool": "var(--color-accent-cool)",
        "accent-warm": "var(--color-accent-warm)",
        "text-muted": "var(--color-text-muted)",
      },
    },
  },
  plugins: [],
};

export default config;
