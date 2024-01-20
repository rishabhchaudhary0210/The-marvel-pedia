/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loading1 : "loading 1s ease-in-out 0.5s infinite",
        loading2 : "loading 1s ease-in-out 0.75s infinite",
        loading3 : "loading 1s ease-in-out 0.9s infinite",
      },
      keyframes: {
        loading : {
          "0%,100%" : {transform: 'translateY(0px)'},
          '50%' : {transform : "translateY(25px)"}, 
        }
      }, 
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}

