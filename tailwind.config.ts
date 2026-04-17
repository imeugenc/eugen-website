import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080808",
        surface: "#121212",
        line: "#26211a",
        gold: {
          100: "#f6ebce",
          200: "#e8d7a1",
          300: "#d2b46c",
          400: "#b08a46"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(210, 180, 108, 0.1), 0 24px 80px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        rise: "rise 0.9s ease-out forwards",
        pulseSoft: "pulseSoft 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
