/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 100%",
      },
      boxShadow: {
        'moon-outline': 'inset 10px 0px 2px 0 #93c5fd',
        'moon-details': 'inset 2px 0 4px rgba(167, 167, 167, 0.685)'
      },
      backgroundPosition: {
        "right-100": "-100%",
        "zero": "0"
      },
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
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "50%": {
            opacity: "5"
          },

          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        moveIn: "moveIn 450ms ease-in-out 1",
        moveOut: "moveOut 450ms ease-in-out 1 forwards",
        fadeIn: "fadeIn 1s ease-in-out"
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },

      fontSize: {
        base: ["1rem", "1.5"],
        headline_md: ["2.027rem", "1.2"],
        headline_sm: ["1.602rem", "1.2"],
        headline_xs: ["1.302rem", "1.2"],
        display_lg: ["5.202rem", "1.15"],
        label_md: ["0.889rem", "1.5"],
        title_md: ["1.266rem", "1.5"],
        title_sm: ["1.125rem", "1.5"]
      },
      gridTemplateColumns: {
        'dynamic': 'repeat(auto-fill, minmax(288px, 1fr))',
      }

    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ]
}
