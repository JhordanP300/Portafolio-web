// tailwind.config.js — Configuración de Tailwind CSS
/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind escanea estos archivos para generar solo las clases usadas
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Fuentes personalizadas
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      // Colores extra del portafolio
      colors: {
        primary: "#22d3ee",
        secondary: "#a78bfa",
      },
      // Animaciones extra
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
