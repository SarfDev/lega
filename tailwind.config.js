/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
        
          "primary": "#0A1428",
                  
          "secondary": "#0AC8B9",
                  
          "accent": "#C89B3C",
                  
          "neutral": "#A09B8C",
                  
          "base-100": "#ffffff",
                  
          "info": "#0000ff",
                  
          "success": "#00ff00",
                  
          "warning": "#00ff00",
                  
          "error": "#ff0000",
        },
      },
    ],
  },
};
