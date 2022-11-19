/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat-Black': ['Montserrat-Black'],
        'Montserrat-BlackItalic': ['Montserrat-BlackItalic'],
        'Montserrat-Bold': ['Montserrat-Bold'],
        'Montserrat-BoldItalic': ['Montserrat-BoldItalic'],
        'Montserrat-ExtraBold': ['Montserrat-ExtraBold'],
        'Montserrat-ExtraLight': ['Montserrat-ExtraLight'],
        'Montserrat-ExtraBoldItalic': ['Montserrat-ExtraBoldItalic'],
        'Montserrat-ExtraLightItalic': ['Montserrat-ExtraLightItalic'],
        'Montserrat-Light': ['Montserrat-Light'],
        'Montserrat-LightItalic': ['Montserrat-LightItalic'] ,
        'Montserrat-Medium': ['Montserrat-Medium'] ,
        'Montserrat-MediumItalic': ['Montserrat-MediumItalic'] ,
        'Montserrat-Regular': ['Montserrat-Regular'] ,
        'Montserrat-SemiBold': ['Montserrat-SemiBold'] ,
        'Montserrat-SemiBoldItalic': ['Montserrat-SemiBoldItalic'] ,
        'Montserrat-Thin': ['Montserrat-Thin'] ,
        'Montserrat-ThinItalic': ['Montserrat-ThinItalic'],//
        'Poppins-Black': ['Poppins-Black'],
        'Poppins-BlackItalic': ['Poppins-BlackItalic'],
        'Poppins-Bold': ['Poppins-Bold'],
        'Poppins-BoldItalic': ['Poppins-BoldItalic'],
        'Poppins-ExtraBold': ['Poppins-ExtraBold'],
        'Poppins-ExtraLight': ['Poppins-ExtraLight'],
        'Poppins-ExtraBoldItalic': ['Poppins-ExtraBoldItalic'],
        'Poppins-ExtraLightItalic': ['Poppins-ExtraLightItalic'],
        'Poppins-Light': ['Poppins-Light'],
        'Poppins-LightItalic': ['Poppins-LightItalic'] ,
        'Poppins-Medium': ['Poppins-Medium'] ,
        'Poppins-MediumItalic': ['Poppins-MediumItalic'] ,
        'Poppins-Regular': ['Poppins-Regular'] ,
        'Poppins-SemiBold': ['Poppins-SemiBold'] ,
        'Poppins-SemiBoldItalic': ['Poppins-SemiBoldItalic'] ,
        'Poppins-Thin': ['Poppins-Thin'] ,
        'Poppins-ThinItalic': ['Poppins-ThinItalic'] ,
      },
      backgroundImage: { 'SmallMap': "url('./Images/ViewHousePage/SmallMap.svg')", 'BigMap': "url('./Images/ViewHousePage/BigMap.svg')"},
      keyframes: {
        Showup: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '1'},
        },
        Showupslow: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
          '100%': { opacity: '1'},
        },
        fade: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1'},
        },
      },
      animation: {
        'Showup': 'Showup 0.5s ease-out  forwards ',
        'Showupslow': 'Showupslow 1s ease-out  forwards ',
        'fade': 'fade 1s ease-out  forwards ',

      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
}
