/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F97316",
        dark: "#1F2937",
        glbGold: '#C9A13B',
        glbBrown: '#6B3F1D',
        glbMaroon: '#7B2F22',
        glbWhite: '#FFFFFF',
        glbBlack: '#222222',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        glbSerif: ['Merriweather', 'serif'],
        glbSans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 