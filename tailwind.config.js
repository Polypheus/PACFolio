// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Helvetica', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        primary: ['Orbitron', 'Arial Black', 'sans-serif'],
        secondary: ['Rajdhani', 'Arial', 'sans-serif'],
        display: ['Exo 2', 'Impact', 'sans-serif'],
      },
      fontSize: {
        'hero': 'var(--text-hero)',
        'mega': 'var(--text-mega)',
        'huge': 'var(--text-huge)',
        'large': 'var(--text-large)',
        'medium': 'var(--text-medium)',
        'normal': 'var(--text-normal)',
        'small': 'var(--text-small)',
        'tiny': 'var(--text-tiny)',
      },
      colors: {
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff0080',
        'neon-green': '#39ff14',
        'neon-purple': '#bf00ff',
        'neon-orange': '#ff6600',
        'neon-cyan': '#00ffff',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'glitch': 'glitch-skew 2s infinite linear alternate-reverse',
        'neon-flicker': 'neon-flicker 3s infinite alternate',
        'holographic': 'holographic-shift 4s ease infinite',
        'pulse-dot': 'pulse-dot 2s infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
      }
    },
  },
  plugins: [],
}