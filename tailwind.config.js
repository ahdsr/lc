const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-monica-01': "url('~assets/images/monica-hero.jpg')",

        'hero-monica-02':
          "url('https://images.unsplash.com/photo-1583530015497-6cf9ef9c6f0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')",
      }),
      colors: {
        'element-dark-blue': '#333D47',
        'element-green': '#82C341',
        'element-bright-blue': '#3262C3',
        'monica-mauvelous': '#E4959E',
        'monica-xoletic': '#1F0812',
        'monica-roseybrown': '#B98B82',
        'monica-melon': '#F3B3A6',
      },
      keyframes: {
        roll: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateX(20rem) rotate(385deg)' },
        },
        scale: {
          '0%, 100%': { transform: 'scaleX(0) scaleY(0)' },
          '50%': { transform: 'scaleX(2) scaleY(2)' },
        },
      },
      animations: {
        roll: 'roll 3s ease-in-out infinite',
      },
      variants: {
        extend: {},
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar-hide'),
        // ...
      ],
    },
  },
}
