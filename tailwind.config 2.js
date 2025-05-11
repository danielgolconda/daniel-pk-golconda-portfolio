/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a2233',
        'secondary-dark': '#101522',
        'text-primary': '#e0e6f0',
        'text-secondary': '#b0b8c9',
      },
    },
  },
  plugins: [],
} 