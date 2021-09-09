module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1.75': '0.4375rem',
        '2.5': '0.625rem',
        '3.75': '0.9375rem',
        '4.5': '1.125rem',
        '5.25': '1.3125rem',
        '5.5': '1.375rem',
        '6.25': '1.5625rem',
        '7.5': '1.875rem',
        '8.75': '2.1875rem',
        '15': '3.75rem',
        '70': '17.5rem',
        '100': '25rem',
        '75%': '75%',
        '110%': '110%',
      },
      colors: {
        primary: '#141526',
        secondary: '#727377',
        lightestGray: '#f7f7f7',
        link: '#3399ff',
        codeBg: '#2d2d2d',
        codeHighlight: '#f08d49'
      },
      letterSpacing: {
        '1px': '1px',
        '2px': '2px',
        '5px': '5px',
      },
      maxWidth: {
        '6.5xl': '75rem'
      },
      fontSize: {
        '1.5xl': '22px',
        '3.5xl': '32px'
      },
      fontFamily: {
        mainBody: ['Nunito Sans', 'sans-serif'],
        mainHeader: ['Lato', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
