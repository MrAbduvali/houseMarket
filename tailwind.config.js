/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'z': '0px',
    },
    colors: {
      'main-bg': '#F2F4F8',
      'title': '#2C2C2C',
      'white': '#ffffff',
      'black': '#000000',
      "icon":"#626262",
      "lime":"#0C6",
      "transparent":"transparent",
      "gray":"#8F8F8F",
    },
    extend: {
      boxShadow: {
        'input': 'rgba(0, 0, 0, 0.15) 0px 2px 4px 0px inset',
      }
    },
  },
  plugins: [],
}

