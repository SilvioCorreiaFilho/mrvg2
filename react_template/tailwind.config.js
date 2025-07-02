/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1B365D',
        'primary-light': '#2563EB',
        'secondary-gold': '#C9A961',
        'accent-blue': '#E8F4FD',
        'text-primary': '#2C3E50',
        'background-default': '#FFFFFF',
      },
      keyframes: {
        cloud1: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(1000%)' }
        },
        cloud2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(1000%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'cloud-1': 'cloud1 120s linear infinite',
        'cloud-2': 'cloud2 180s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
