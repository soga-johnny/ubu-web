import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delay': 'fade-in 1s ease-out 0.5s forwards',
        'fade-in-delay-2': 'fade-in 1s ease-out 1s forwards',
        'slide-up': 'slide-up 1s ease-out',
        'draw': 'draw 3s ease-in-out infinite',
        'scroll-indicator': 'scroll 2s ease-in-out infinite',
      },
      fontFamily: {
        zen: ["var(--font-zen-kaku)"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};

export default config;
