/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gbcolor: '#161619',
        gbcolorinfo: '#F6F6F6',
        gbtitle: '#676767',
        gbtext: '#161619'
      },
      fontFamily: {
        'jost': ['Jost'],
        'abeezee': ['ABeeZee'],
        'abel': ['Abel'],
      }
    },
  },
  plugins: [],
}
