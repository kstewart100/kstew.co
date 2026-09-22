
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inconsolata', 'monospace'],
        mono: ['Inconsolata', 'monospace'],
        heading: ['Be Vietnam Pro', 'sans-serif'],
        handwriting: ['Gochi Hand', 'cursive'],
      },
      colors: {
        'color-bg-canvas': 'var(--color-bg-canvas)',
        'color-bg-surface': 'var(--color-bg-surface)',
        'color-bg-subtle': 'var(--color-bg-subtle)',
        'color-bg-inverse': 'var(--color-bg-inverse)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-body': 'var(--color-text-body)',
        'color-text-caption': 'var(--color-text-caption)',
        'color-text-on-dark': 'var(--color-text-on-dark)',
        'color-text-on-dark-muted': 'var(--color-text-on-dark-muted)',
        'color-interactive': 'var(--color-interactive)',
        'color-border-default': 'var(--color-border-default)',
        'color-accent-hero': 'var(--color-accent-hero)',
      },
      boxShadow: {
        'glass': 'inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
