/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E8E8E8',
          dark: '#9CA3AF',
          deeper: '#6B7280',
        },
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 4s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'count-up': 'countUp 0.3s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backgroundImage: {
        'steel-radial': 'radial-gradient(ellipse at top, #1a1a1a 0%, #080808 100%)',
      },
    },
  },
  plugins: [],
}
