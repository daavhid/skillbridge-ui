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
            color2:' rgba(1, 39, 55, 1)'
            
        },
        backgroundImage:(theme)=>({
            gradient1: 'linear-gradient(270deg, rgba(1, 39, 55, 1) 0%, #0D4D69 100%);'  
        })
    },
  },
  plugins: [],
}

