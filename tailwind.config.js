/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customPink: '#f4ccd6',
      customBrown: '#f8d0b2',
      customBrown2: '#f6f3ee',
      darkHover: '#757575',
    }
  },
  plugins: [],
}
