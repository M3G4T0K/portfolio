/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'texto': '#FFFFFF',
        'links': "#C70039",
        'botoes': "#0070FF",
        'destaque': "#00FFFF"
      },
      fontSize: {
        "titulo-xl": "clamp(1rem, 5vw, 3rem)",
      }
    },
  },
  plugins: [],
}

