/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'neturalSilver':'#F5F7FA',
        'neturalDGrey':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neturalGrey':'#717171',
        'grey900':'#18191F',
        'bluehover':'#2194f3',
        'bgcolor':'#F6F5F9',

      },
      screens : {
        customscreen : "1240px"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [flowbite.plugin(),],
}

