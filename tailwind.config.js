/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx}"
  ],  
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '1080px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(-100vw)'
          }
        },
      },
      animation: {
      	slider: 'slider 10s linear infinite'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

