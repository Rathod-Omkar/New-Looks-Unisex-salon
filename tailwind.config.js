/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        salonBlack: '#0f0f0f',
        salonGray: '#181818',
        salonGold: '#D4AF37',
        salonGoldSoft: '#f2d676',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 18px 60px rgba(212, 175, 55, 0.18)',
        luxury: '0 24px 80px rgba(0, 0, 0, 0.36)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37, #f2d676, #b99224)',
      },
    },
  },
  plugins: [],
};
