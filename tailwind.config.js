/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        graffiti: ['Permanent Marker', 'cursive'],
      },
      scale: {
        '102': '1.02',
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        spinCard: {
          '0%': { transform: 'rotateY(0deg) translateZ(100px)' },
          '100%': { transform: 'rotateY(360deg) translateZ(100px)' }
        },
        globeRotate: {
          '0%': { transform: 'rotateY(0deg) rotateX(-10deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(-10deg)' }
        },
        modalIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9) translateZ(0) rotateY(20deg)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateZ(500px) rotateY(0deg)'
          }
        },
        modalBgIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        spinCard: 'spinCard 1.5s ease-in-out',
        globeRotate: 'globeRotate 60s linear infinite',
        modalIn: 'modalIn 0.5s ease-out forwards',
        modalBgIn: 'modalBgIn 0.3s ease-out forwards'
      }
    },
  },
  plugins: [],
} 