/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#000400',
        'secondary-color-1': '#151E11',
        'secondary-color-2': '#21351B',
        'secondary-color-3': '#2D4F25',
        'secondary-color-4': '#34D325',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
  },
}
