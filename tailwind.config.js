/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",            // file utama HTML
    "./src/**/*.{js,jsx,ts,tsx}" // semua file di folder src dengan ekstensi js, jsx, ts, tsx
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        tienne: ['Tienne', 'serif'],
      },
    },
  },
  plugins: [],
}
