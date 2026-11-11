import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface AnimatedHeadlineProps {
  words?: string[];
  interval?: number;
  className?: string;
}

const DEFAULT_WORDS = ['explore', 'write', 'push', 'show up', 'build'];

const HEADLINE_FONT_SIZE = 'clamp(3.4rem, 10vw, 7.6rem)';
const WORD_PREFIX = '_';
const FONT_MEASURE_TIMEOUT_MS = 1500;

export function AnimatedHeadline({
  words = DEFAULT_WORDS,
  interval = 2400,
  className = '',
}: AnimatedHeadlineProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordSlotWidth, setWordSlotWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      let max = 0;
      for (const word of words) {
        el.textContent = `${WORD_PREFIX}${word}.`;
        max = Math.max(max, el.getBoundingClientRect().width);
      }
      const fontsLoaded = document.fonts?.status === 'loaded';
      const buffer = fontsLoaded ? 2 : 12;
      setWordSlotWidth(Math.ceil(max) + buffer);
      el.textContent = '';
    };

    measure();
    window.addEventListener('resize', measure);

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const timeout = new Promise<void>((resolve) => {
      window.setTimeout(resolve, FONT_MEASURE_TIMEOUT_MS);
    });
    void Promise.race([fontsReady, timeout]).then(measure);

    return () => window.removeEventListener('resize', measure);
  }, [words]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[wordIndex];

  return (
    <div className={`text-center md:text-right ${className}`}>
      <h1
        className="font-hero font-semibold text-color-text-on-dark leading-[1] md:-mr-[0.04em]"
        style={{ fontSize: HEADLINE_FONT_SIZE }}
      >
        Get out.
      </h1>
      <div
        className="font-hero font-semibold text-color-text-on-dark leading-[1] whitespace-nowrap md:-mr-[0.04em]"
        style={{ fontSize: HEADLINE_FONT_SIZE }}
        aria-live="polite"
      >
        <span
          className="relative inline-block align-baseline overflow-visible text-center md:text-right"
          style={
            wordSlotWidth > 0
              ? { width: wordSlotWidth, minWidth: wordSlotWidth }
              : undefined
          }
        >
          <span
            ref={measureRef}
            aria-hidden="true"
            className="invisible absolute left-0 top-0 whitespace-nowrap pointer-events-none"
            style={{ fontSize: HEADLINE_FONT_SIZE }}
          />
          <span
            key={`${wordIndex}-${currentWord}`}
            className="headline-cycle-word"
          >
            <span className="text-color-accent-hero">{WORD_PREFIX}</span>
            {currentWord}.
          </span>
        </span>
      </div>
      <p
        className="mt-4 md:mt-6 font-mono font-medium text-color-text-on-dark leading-snug max-w-[34rem] mx-auto md:mx-0 md:ml-auto"
        style={{ fontSize: 'clamp(1.125rem, 1.6vw, 1.5rem)', textWrap: 'balance' }}
      >
        Content design for products that feel good to use.
      </p>
    </div>
  );
}
