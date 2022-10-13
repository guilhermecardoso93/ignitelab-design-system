/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    color: {
      'gray-900': "#121214",
      'gray-800': "#202024",
      'gray-400': "#7C7C8A",
      'gray-200': "#C4C4CC",
      'gray-100': "#E1E1E6",

      'black': "#000000",
      'white': "#fff",

      'cyan-500': "#81d8e7",
      'cyan-300': "#9be1fb",
    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}