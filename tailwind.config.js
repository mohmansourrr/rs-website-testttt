/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand terracotta — taken from the RS brochure */
        rust: {
          50: '#FCF3EE',
          100: '#F7E3D8',
          200: '#EBC0A9',
          300: '#DD9973',
          400: '#CC6F45',
          500: '#BE5A32',
          600: '#A34A28',
          700: '#853B1F',
          800: '#652C17',
          900: '#451E0F',
        },
        /* Warm near-black */
        ink: {
          DEFAULT: '#1C1A19',
          950: '#100E0D',
          900: '#141211',
          800: '#1C1A19',
          700: '#282523',
          600: '#3A3532',
          500: '#544D48',
        },
        /* Cream page background */
        cream: {
          DEFAULT: '#F4EFE7',
          100: '#FAF7F2',
          200: '#EFE9DF',
          300: '#E4DCCF',
        },
        /* Accessible muted text */
        muted: {
          light: '#5A5450',
          dark: '#A9A29C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        display: '0.08em',
        wider2: '0.24em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
