/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: { 
      colors:{
       
          blueblack:"rgb(87, 101, 116)",
          lessblack: "rgb(34, 47, 62)",
          concrete:"rgb(236, 240, 241)"

  
      },
      screens:{
        
        "onmedium":"1159px"
        
      },

      fontFamily:{
      newfont : "'Roboto Condensed',sans-serif"
      }},
     
 
  },
  plugins: [],
}

