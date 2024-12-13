/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define custom solid colors if needed
        customBlue: 'hsla(214, 92%, 47%, 1)',
        customDarkBlue: 'hsla(231, 85%, 24%, 1)',
      },
      backgroundImage: {
        // Add gradient backgrounds
        customGradient: 'linear-gradient(90deg, hsla(214, 92%, 47%, 1) 27%, hsla(231, 85%, 24%, 1) 72%)',
        fontFamily: {
          myfont:['Roboto']
        },
      },
    },
  },
  plugins: [],
}


