import React, { useState, useEffect } from 'react';

const message = 'Currently founding designer at a consumer running app';
const cta = 'Open to project work';
const separator = '✦';

const items = [
  message,
  separator,
  cta,
  separator,
  message,
  separator,
  cta,
  separator,
  message,
  separator,
  cta,
  separator,
];

export function TickerBanner() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const staticText = `${message} ${separator} ${cta}`;

  if (prefersReducedMotion) {
    return (
      <div
        className="font-sans text-center text-[13px] tracking-wide py-3.5 px-4 text-[var(--color-primitive-gold)]"
        style={{ background: 'var(--color-bg-invert)' }}
        aria-label="Current role and availability"
      >
        <span className="font-normal">{message}</span>
        <span className="opacity-35 mx-2" aria-hidden="true">
          {separator}
        </span>
        <span className="font-semibold text-[var(--color-interactive-accent)]">
          {cta}
        </span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden relative"
      style={{
        background: 'var(--color-bg-invert)',
        padding: '14px 0',
      }}
    >
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 55s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to right, var(--color-bg-invert), transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to left, var(--color-bg-invert), transparent)',
        }}
      />

      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-sans whitespace-nowrap py-0 px-7 text-[13px]"
            style={{
              fontWeight: item === cta ? 600 : 400,
              letterSpacing: item === separator ? 0 : '0.04em',
              color:
                item === separator
                  ? 'rgba(196,163,90,0.35)'
                  : item === cta
                    ? 'var(--color-interactive-accent)'
                    : 'var(--color-primitive-gold)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
