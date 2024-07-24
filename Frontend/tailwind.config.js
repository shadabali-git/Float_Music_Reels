/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
          'red': '#96031a',
          'black':'#1b1b1e',
          'gray':'#6d676e',
          'white':'#fbfffe',
          'gold':'#faa916',
          'darkred':'#370617'

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #ffb8d1, #faa916, #1b1b1e)', // Customize as needed
      },
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

