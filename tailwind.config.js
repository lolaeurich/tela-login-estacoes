/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-rgba': 'rgba(255, 255, 255, 0.25)',
        'border':  'rgba(255, 255, 255, 0.5)'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(calc(100% + 100vw))' },
          '50%': { transform: 'translateX(calc(-100% - 100vw))'},
          '50.01%': { transform: 'translateX(calc(-100% - 100vw)) rotateY(180deg)'},
          '100%': { transform: 'translateX(calc(100% + 100vw)) rotateY(180deg)' }
        },
       slideOutDown: {
        '0%': { transform: 'translateY(calc(-100% - 100vh))' },
        '100%': { transform: 'translateY(calc(100% + 100vh)) '},
        
        },
      },
      animation: {
        wiggle: 'wiggle 15s infinite',
        slideOutDown: 'slideOutDown 15s linear(-0.38 71.32%, 1 100%) infinite'
      }
    },
  },
  plugins: [],
}