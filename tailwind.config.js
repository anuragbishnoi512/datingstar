/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    variants: {
      backdropBlur: ['responsive'],
    },
    extend: {
      backdropBlur: {
        sm: '2px',
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        }
      },
      fontFamily: {
        'raleway': "Raleway, sans-serif",
        'inter': "Inter, sans-serif",
      },
      colors: {
        'sunsetGold': "#F7B103",
        'charcoalGray': "#454545",
        'richBlack': "#1A1A1A",
        'warmGray': "#A49496"
      }
    },
  },
  plugins: [],
}

