/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/home/**/*.{js,jsx}',
    './src/id/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'fade-edges':
          'linear-gradient(to right, transparent, white 10%, white 90%, transparent)',
      },
      fontFamily: {
        dosis: ['var(--font-dosis)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
