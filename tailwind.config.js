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
      keyframes: {
        moveIn: {
          "0%": {
            transform: "scale(0, 1)"
          },

          "100%": {
            transform: "scale(1, 1)"
          }
        },

        moveOut: {
          "0%": {
            transform: "scale(1, 1)"
          },

          "100%": {
            transform: "scale(0, 1)"
          }
        },
      },
      animation: {
        moveIn: "moveIn 450ms ease-in-out 1",
        moveOut: "moveOut 450ms ease-in-out 1 forwards"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },

      fontSize: {
        base: ["1rem", "1.5"],
        headline_md: ["2.027rem", "1.2"],
        headline_sm: ["1.602rem", "1.2"],
        display_lg: ["5.202rem", "1.15"],
        label_md: ["0.889rem", "1.5"],
        title_md: ["1.266rem", "1.5"],
        title_sm: ["1.125rem", "1.5"]
      }
    },
  },
  plugins: [],
}
