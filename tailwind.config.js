
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
        'color-primitive-cream': 'var(--color-primitive-cream)',
        'color-bg-canvas': 'var(--color-bg-canvas)',
        'color-bg-surface': 'var(--color-bg-surface)',
        'color-bg-ticker': 'var(--color-bg-ticker)',
        'color-bg-notion-subtle': 'var(--color-bg-notion-subtle)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-body': 'var(--color-text-body)',
        'color-text-on-dark': 'var(--color-text-on-dark)',
        'color-text-ticker-accent': 'var(--color-text-ticker-accent)',
        'color-text-notion': 'var(--color-text-notion)',
        'color-text-notion-muted': 'var(--color-text-notion-muted)',
        'color-interactive-primary': 'var(--color-interactive-primary)',
        'color-border-default': 'var(--color-border-default)',
        'color-border-accent': 'var(--color-border-accent)',
        'color-border-notion': 'var(--color-border-notion)',
        'color-status-error': 'var(--color-status-error)',
      },
      boxShadow: {
        'glass': 'inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
