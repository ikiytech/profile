// tailwind.config.js
module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        keyframes: {
          flipIn: {
            '0%': { transform: 'rotateY(90deg)', opacity: '0' },
            '100%': { transform: 'rotateY(0deg)', opacity: '1' },
          },
        },
        animation: {
          flipIn: 'flipIn 0.7s ease-out forwards',
        },
      },
    },
    plugins: [],
  }
  