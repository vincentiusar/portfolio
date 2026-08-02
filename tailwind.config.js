/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--border)',
        ring: 'var(--copper)',
        background: 'var(--bg)',
        foreground: 'var(--text)',
        primary: {
          DEFAULT: 'var(--copper)',
          foreground: '#12100d',
        },
        secondary: {
          DEFAULT: 'var(--bg-panel-hover)',
          foreground: 'var(--text)',
        },
        muted: {
          DEFAULT: 'var(--bg-panel)',
          foreground: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--teal)',
          foreground: '#0b1512',
        },
        destructive: {
          DEFAULT: 'var(--red)',
          foreground: '#fff',
        },
        card: {
          DEFAULT: 'var(--bg-panel)',
          foreground: 'var(--text)',
        },
        popover: {
          DEFAULT: 'var(--bg-panel)',
          foreground: 'var(--text)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
