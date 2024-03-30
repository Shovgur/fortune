/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-gold':
          'radial-gradient(45.88% 297.28% at 45.88% 49.32%, #FBF298 0%, rgba(251, 242, 152, 0) 100%), linear-gradient(90deg, #C08434 0%, #BC7D2D 91.75%)',
        'gradient-green':
          'radial-gradient(45.88% 297.28% at 45.88% 50%, #6DD767 0%, rgba(109, 215, 103, 0) 92.71%), linear-gradient(90deg, #3D882F 0%, #2A6326 91.75%)',
      },
      boxShadow: {
        wheel: '0px 0px 75.47586059570312px 0px #401265 inset',
      },
      transitionDuration: {
        8000: '8000ms',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
