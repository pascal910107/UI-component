const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple-bg': '#080B12',
        'custom-purple-text': '#CFB3E6',
        'custom-purple-border-grd1': '#6C6499',
        'custom-purple-border-grd2': '#111222',
        'custom-purple-card-grd1': '#1F193D',
        'custom-purple-card-grd2': '#05060D',
        'custom-purple-radial-center': 'rgba(173,155,255,0.3)',
        'custom-purple-radial-edge': 'rgba(11,12,22,0.3)',
        'custom-purple-shadow': 'rgba(173,155,255,0.5)',
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      }
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][200];
          const color2 = colors[color][700];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`
          }
        }
      }
      addUtilities(neonUtilities);
    })
  ],
}

