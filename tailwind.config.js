/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1A',
        'secondary': '#666666',
        'theme': '#0066CC',
        'theme-100': '#E5F1FF',
        'main': '#0066CC',
        'btn-text-main': '#FFFFFF',
        'btn-text-hover': '#FFFFFF',
        'btn-bg-main': '#0066CC',
        'btn-bg-hover': '#004C99',
      },
      borderRadius: {
        'theme': '20px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 