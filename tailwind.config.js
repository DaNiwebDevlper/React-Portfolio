/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#121212',
        'sec-color': '#222',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'madimi': ['Madim One', 'cursive'],
      },
    },
  },
  plugins: [],
}

