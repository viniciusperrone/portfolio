/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          default: "#1E1E1E"
        },
        gray: {
          default: "#F6F6F6",
          400: "#C6C6C6"
        },
        purple: {
          dark: "#151526",
          900: "#3B3B63"
        },
        blue: {
          600: "#62B5E5"
        },
        gradientBlue1: '#06CDD4',
        gradientBlue2: '#0EA5E9',
        gradientBlue3: '#3B82F6',
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "open": ["Open Sans", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"]
      },
      screens: {
        "xs": "300px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      }
    },
  },
  plugins: [],
}
