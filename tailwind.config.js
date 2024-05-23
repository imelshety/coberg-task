/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        // scarlet-gum
        'PrimaryColor': {
          '50': '#faf7fd',
          '100': '#f3ecfb',
          '200': '#eadcf8',
          '300': '#d9c0f2',
          '400': '#c297e9',
          '500': '#a96fdd',
          '600': '#9551cc',
          '700': '#7f3eb2',
          '800': '#6b3792',
          '900': '#582d76',
          '950': '#451a64', //default
      },
      // alabaster
    'secondaryColor': {
      '50': '#f8f8f8', //default
      '100': '#efefef',
      '200': '#dcdcdc',
      '300': '#bdbdbd',
      '400': '#989898',
      '500': '#7c7c7c',
      '600': '#656565',
      '700': '#525252',
      '800': '#464646',
      '900': '#3d3d3d',
      '950': '#292929',
  },
      //black
      'black': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#000000', //default
    },
    
  
      
      }
    },
  },
  plugins: [],
}