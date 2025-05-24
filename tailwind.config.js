/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0D0D0D',
        'terminal-text': '#33FF33',
        'terminal-accent': '#00CCFF',
        'terminal-warning': '#FF0033',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      animation: {
        blink: 'blink 1s infinite',
        glitch: 'glitch 0.5s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
      },
    },
  },
  plugins: [],
};