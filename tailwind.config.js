
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
        'color-primitive-blue': 'var(--color-primitive-blue)',
        'color-primitive-navy': 'var(--color-primitive-navy)',
        'color-primitive-coral': 'var(--color-primitive-coral)',
        'color-primitive-magenta': 'var(--color-primitive-magenta)',
        'color-primitive-red': 'var(--color-primitive-red)',
        'color-primitive-cream': 'var(--color-primitive-cream)',
        'color-primitive-gold': 'var(--color-primitive-gold)',
        'color-bg-canvas': 'var(--color-bg-canvas)',
        'color-bg-surface': 'var(--color-bg-surface)',
        'color-bg-subtle': 'var(--color-bg-subtle)',
        'color-bg-invert': 'var(--color-bg-invert)',
        'color-text-primary': 'var(--color-text-primary)',
        'color-text-secondary': 'var(--color-text-secondary)',
        'color-text-link': 'var(--color-text-link)',
        'color-text-on-dark': 'var(--color-text-on-dark)',
        'color-interactive-primary': 'var(--color-interactive-primary)',
        'color-interactive-primary-hover': 'var(--color-interactive-primary-hover)',
        'color-interactive-accent': 'var(--color-interactive-accent)',
        'color-interactive-accent-hover': 'var(--color-interactive-accent-hover)',
        'color-border-default': 'var(--color-border-default)',
        'color-border-strong': 'var(--color-border-strong)',
        'color-border-accent': 'var(--color-border-accent)',
        'color-decor-highlight': 'var(--color-decor-highlight)',
        'color-decor-emphasis': 'var(--color-decor-emphasis)',
        'color-status-error': 'var(--color-status-error)',
        'tycho-teal': '#0B3D4A',
        'tycho-blue': '#1A6B7A',
        'tycho-peach': '#D4956B',
        'tycho-cream': '#F5E6D3',
        'tycho-light': '#F5C6A0',
      },
      boxShadow: {
        'glass': 'inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
