/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'checkers': 'repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 12px, rgba(0,0,0,0.08) 12px 24px)',
      },
      boxShadow: { 'speed': '0 10px 30px rgba(255, 200, 0, 0.25)' }
    }
  },
  plugins: [],
}
