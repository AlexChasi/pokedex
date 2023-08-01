/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        appear: 'appear .2s ease-in'
      },
      keyframes: {
        appear: {
          from: { transform: 'translateY(-2rem) scale(1.1)', opacity: 0 },
          to: { transform: 'translateY(0) scale(1)', opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
