// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your content paths
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ensure your serif font is set up here
        serif: ['var(--font-playfair)', 'serif'], 
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // A very slow rotation for the background sigil (3 minutes per rotation)
        'spin-cosmic': 'spin 180s linear infinite',
        // A slow drift for stars
        'drift': 'drift 60s linear infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-5%, -2%)' },
        }
      }
    },
  },
  plugins: [],
}