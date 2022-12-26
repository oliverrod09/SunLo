/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {animation: {
      'spin-slow': 'spin 10s linear infinite',
      'bounce-slow': 'bounce 5s linear infinite',
    }},
  },
  plugins: [],
}
