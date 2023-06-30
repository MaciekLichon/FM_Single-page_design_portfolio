/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: { // font-
      jakarta: ['Plus Jakarta Sans', 'sans-serif']
    },
    fontWeight: { // font-
      regular: 500,
      bold: 700
    },
    fontSize: { // text-
      button_mob: ['14px', '18px'],
      button_tablet: ['16px', '20px'],

      regular_mob: ['16px', '26px'],
      regular_tablet: ['18px', '28px'],

      header_small_mob: ['24px', '30px'],
      header_small_tablet: ['32px', '40px'],

      header_medium_mob: ['26px', '33px'],
      header_medium_tablet: ['32px', '40px'],
      header_medium_desktop: ['40px', '50px'],

      header_big_mob: ['36px', '45px'],
      header_big_tablet: ['44px', '55px'],
      header_big_desktop: ['56px', '71px'],
    },
    colors: { // text-
      purple: '#755CDE',
      orange: '#F6A560',
      pink: '#F39E9E',
      red: '#EB7565',
      teal: '#61C4B7',
      claret: '#552049',
      black: '#030303',
      gray: '#7A746E',
      light: '#FFF7F0'
    },
    extend: {},
  },
  plugins: [],
}

