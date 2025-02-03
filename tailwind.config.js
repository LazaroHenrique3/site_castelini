/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D73D53',
        'primary-gray': '#373B4D',
        'secondary-gray': '#A3A7BE'
      },
      screens: {
        '3xl': '1920px', // Adiciona o breakpoint 3xl
      },
    },
  },
  plugins: [],
}
