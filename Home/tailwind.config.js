/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.html', // Include all HTML files in the project directory and its subdirectories
        './**/*.js', 
      ],
  theme: {
    extend: {
        fontFamily:{
            rubik:['rubiks']
        },
        colors:{
            yellow: 'rgba(255, 214, 0, 1)',

        }
    },
  },
  plugins: [],
}

