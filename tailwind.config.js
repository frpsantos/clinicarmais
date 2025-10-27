/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oliva: {
          50: "#f3f6f1",
          100: "#e7eee3",
          200: "#cfe0c3",
          300: "#b6d2a3",
          400: "#8fb270",
          500: "#6a8e4c",
          600: "#56733e",
          700: "#435a31",
          800: "#2e3d22",
          900: "#192311"
        },
        madeira: "#caa57a"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
}
