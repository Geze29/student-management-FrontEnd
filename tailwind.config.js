/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grayish :{
          '156':'#9FBDBF'
        },
        theme:'#1D334E'
      }
    },
  },
  plugins: [],
}

