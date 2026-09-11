import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a15a',
          50: '#fcf9f0',
          100: '#f8f0dd',
          200: '#f0dfbf',
          300: '#e5c895',
          400: '#d9af6a',
          500: '#c9a15a',
          600: '#b48a45',
          700: '#946d37',
          800: '#78562e',
          900: '#624628',
        },
        dark: {
          DEFAULT: '#1a1410',
          50: '#f5f3f0',
          100: '#e6e0d9',
          200: '#d0c5b8',
          300: '#b4a592',
          400: '#9c8570',
          500: '#836e5c',
          600: '#6a5849',
          700: '#54463a',
          800: '#3d332b',
          900: '#1a1410',
        },
        cream: {
          DEFAULT: '#f5f1ea',
          50: '#fdfcfb',
          100: '#faf8f4',
          200: '#f5f1ea',
          300: '#eee8dd',
          400: '#e4dccd',
          500: '#d9cfbc',
          600: '#cbbda5',
          700: '#b8a689',
          800: '#9e8c6e',
          900: '#806f57',
        },
        purple: {
          accent: '#4a3b8c',
          DEFAULT: '#4a3b8c',
          50: '#f5f4f9',
          100: '#e8e5f2',
          200: '#d4cfe6',
          300: '#b5add3',
          400: '#9385bc',
          500: '#7a69a9',
          600: '#665397',
          700: '#54447f',
          800: '#473a69',
          900: '#4a3b8c',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a15a 0%, #e5c895 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1410 0%, #3d332b 100%)',
        'gradient-purple': 'linear-gradient(135deg, #4a3b8c 0%, #7a69a9 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config