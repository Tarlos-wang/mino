/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        extraheavy: 1200, // 自定义权重
      },
      boxShadow: {
        'custom': '0 0 5px 0px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'custom-gray': '#f9f9f9',
      }
    },
  },
  variants: {
    extend: {
      shadow: ['hover', 'focus'],
    },
  },
  plugins: [],
}
