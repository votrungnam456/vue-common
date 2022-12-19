const {
  tailwind,
  lineHeightTailWind,
  widthHeightTailWind,
  color,
  backgroundImage,
  boxShadow,
  zIndex,
  spacing,
} = require('./src/assets/tailwind/index');
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: tailwind,
      borderRadius: tailwind,
      margin: tailwind,
      padding: tailwind,
      colors: color,
      width: widthHeightTailWind,
      height: widthHeightTailWind,
      lineHeight: lineHeightTailWind,
      borderWidth: tailwind,
      inset: tailwind,
      letterSpacing: tailwind,
      backgroundImage: backgroundImage,
      boxShadow: boxShadow,
      zIndex: zIndex,
      spacing: spacing,
      minWidth: {
        '200px': '200px',
        '400px': '400px',
      },
      minHeight: {
        '74px': '74px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
