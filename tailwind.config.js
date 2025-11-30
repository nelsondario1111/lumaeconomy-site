// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Add a serif font for that "Timeless/Contract" feel
        // Ensure you import this font in layout.tsx!
        serif: ['var(--font-playfair)', 'serif'], 
      },
      animation: {
        // A very slow, gentle pulse for the "Living" aspect
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        // A subtle gradient for the 'Void' background
        'void-gradient': 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
      }
    },
  },
  // ...
}