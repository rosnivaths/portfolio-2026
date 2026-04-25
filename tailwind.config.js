/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          dark: '#0f172a', // slate-900
          card: 'rgba(30, 41, 59, 0.7)', // slate-800 with opacity for glass
          border: 'rgba(51, 65, 85, 0.5)', // slate-700 with opacity
          accent: '#38bdf8', // sky-400
          accentHover: '#0284c7', // sky-600
        }
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
