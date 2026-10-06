/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        carta: '#F6F6F2',
        cemento: '#E6E6E6',
        pokemon: '#FFCC00',
        giochi: '#FF3366',
        figurine: '#00CCFF',
        riviste: '#000000',
        gratta: '#00FF66',
      },
      fontFamily: {
        display: ['"Bowlby One"', 'Impact', '"Arial Black"', 'sans-serif'],
        body: ['Archivo', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        hard: '6px 6px 0 0 #000',
        'hard-lg': '10px 10px 0 0 #000',
        'hard-sm': '4px 4px 0 0 #000',
      },
    },
  },
  plugins: [],
}
