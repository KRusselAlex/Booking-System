/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#7e6bff',
            secondary: '#f6f2ff',
            customRed:"#f1dadd",
            customBlue:"#CCEAEB"
        },
    },
},
  plugins: [],
}

