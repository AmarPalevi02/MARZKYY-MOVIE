/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        fontWeight: {
          regular: 400, /* Sesuaikan dengan bobot yang tersedia */
        },
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bacground: '#000000',
        gray0: '#9A9A9A',
        gray1: '#C4C4C4',
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: '375px',
      ss: '640px',
      sm: "768px",
      md: "1060px",
      lg: "1200px"
    },
  },
  plugins: [],
}
