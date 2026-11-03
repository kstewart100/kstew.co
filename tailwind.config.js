
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
        hero: ['Hanken Grotesk', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
        'color-accent-hero-hover': 'var(--color-accent-hero-hover)',
        'color-status-rejected-bg': 'var(--color-status-rejected-bg)',
        'color-status-rejected-border': 'var(--color-status-rejected-border)',
        'color-status-rejected-text': 'var(--color-status-rejected-text)',
        'color-status-final-bg': 'var(--color-status-final-bg)',
        'color-status-final-border': 'var(--color-status-final-border)',
        'color-status-final-text': 'var(--color-status-final-text)',
      },
    },
  },
  plugins: [],
}
