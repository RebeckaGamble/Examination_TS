/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ash': 'rgba(238, 238, 238, 1)',
        // 'snow': 'rgba(244, 243, 241, 0.94)',
        'snow': '#F4F3F1',
        'alert': 'rgba(235, 87, 87, 1)',
        'dark-mint': 'rgba(72, 144, 120, 1)',
        'clay': 'rgba(96, 88, 88, 1)',
        'coal': 'rgba(53, 49, 49, 1)',
        'shade-24-light': 'rgba(241, 240, 236, 0.24)',
        'shade-24-dark': 'rgba(53, 49, 49, 0.24)',
        'shade-12-light': 'rgba(#F1F0EC, .12)'
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        'fira-sans': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}