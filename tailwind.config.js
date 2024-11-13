/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', 
            './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inti: ["Neue Haas Grotesk Display Pro", "sans-serif"]
      },
      screens: {
        "xs": "425px",
      },
      colors: {
        "primary": "#003B6D",
        "secondary": "#676767",
      }
    },
  },
  plugins: [],
}

