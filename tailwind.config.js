module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'twi': ['Twilight'],
        'tp': ['type'],
        'ph': ['ali_ph'],
      },
      colors: {
        'bg-dark': '#1e2228',
        'pan-dark': '#2d333b',
      },
      width: {
        'sr': '112px',
        'sv': '180px',
      },
      height: {
        'content': '80%',
        'sr': '156px',
        'sv': '252px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}