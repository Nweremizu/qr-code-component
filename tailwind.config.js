/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '357px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        attribution_link : 'hsl(228, 45%, 44%)',
        White: 'hsl(0, 0%, 100%)',
        Lightgray: 'hsl(212, 45%, 89%)',
        Grayishblue: 'hsl(220, 15%, 55%)',
        Darkblue: 'hsl(218, 44%, 22%)'
      },

      fontSize: {
        'qr': '15px'
      }
    },
  },
  plugins: [],
}

