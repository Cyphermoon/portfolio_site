/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },

      fontSize: {
        base: ["1rem", "1.5"],
        headline_md: ["2.027rem", "1.2"],
        headline_sm: ["1.602rem", "1.2"],
        display_lg: ["5.202rem", "1.2"],
        label_md: ["0.889rem", "1.5"],
        title_md: ["1.266rem", "1.5"],
        title_sm: ["1.125rem", "1.5"]
      }
    },
  },
  plugins: [],
}
