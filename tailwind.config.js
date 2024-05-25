/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
   
    extend: { 
      colors:{
       
          blueblack:"rgb(72, 126, 176)",
          lessblack: "rgb(25, 42, 86)",
          concrete:"rgb(236, 240, 241)"

  
      },
      screens:{
        
        "onmedium":"1159px",
        "sm":"842px",
        "md":"950",
        "middsm" : "450px"
        
      },

      fontFamily:{
      newfont : "'Roboto Condensed',sans-serif"
      }},
   
  },
  
  plugins: [],
}

