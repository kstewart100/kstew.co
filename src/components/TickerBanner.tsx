import React, { useEffect, useState } from 'react';

const lineA = 'Open to project work';
const lineB = 'Open to work';
const separator = '✦';

const tickerItems = [
  lineA,
  separator,
  lineB,
  separator,
  lineA,
  separator,
  lineB,
  separator,
  lineA,
  separator,
  lineB,
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

  if (prefersReducedMotion) {
    return (
      <div
        className="font-body text-center text-[16px] tracking-wide text-[#C4A35A]"
        style={{ background: '#0B3D4A', padding: '18px 16px' }}
        aria-label="Availability"
      >
        <span className="font-semibold text-[#D4956B]">{lineA}</span>
        <span className="opacity-35 mx-2" aria-hidden="true">
          {separator}
        </span>
        <span className="font-semibold text-[#D4956B]">{lineB}</span>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden relative"
      style={{ background: '#0B3D4A', padding: '18px 0' }}
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
          background: 'linear-gradient(to right, #0B3D4A, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(to left, #0B3D4A, transparent)',
        }}
      />
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={i}
            className="font-body whitespace-nowrap py-0 px-7 text-[16px]"
            style={{
              fontWeight: item === lineA || item === lineB ? 600 : 400,
              letterSpacing: item === separator ? 0 : '0.04em',
              color:
                item === separator ? 'rgba(196,163,90,0.35)' : '#D4956B',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
