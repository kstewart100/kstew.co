import React, { useEffect, useState } from 'react';

export interface AnimatedHeadlineProps {
  words?: string[];
  interval?: number;
  className?: string;
}

const DEFAULT_WORDS = ['explore', 'write', 'push', 'show up', 'build'];

export function AnimatedHeadline({
  words = DEFAULT_WORDS,
  interval = 2400,
  className = '',
}: AnimatedHeadlineProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) {
      setWordIndex(words.length - 1);
      return;
    }

    const timer = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setWordVisible(true);
      }, 350);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <div className={`text-center md:text-right ${className}`}>
      <h1
        className="font-heading font-black text-white tracking-tight leading-[0.95]"
        style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}
      >
        Get out.
      </h1>
      <div
        className="font-handwriting mt-2 md:mt-4 leading-[0.95] whitespace-nowrap"
        style={{
          color: '#1AFF66',
          fontSize: 'clamp(4rem, 12vw, 9rem)',
        }}
      >
        <span className="relative inline-block align-baseline">
          <span aria-hidden="true" className="invisible">
            {longestWord}.
          </span>
          <span
            className="absolute inset-0 text-center md:text-right transition-all duration-300"
            style={{
              opacity: wordVisible ? 1 : 0,
              filter: wordVisible ? 'blur(0px)' : 'blur(8px)',
            }}
          >
            {words[wordIndex]}.
          </span>
        </span>
      </div>
    </div>
  );
}
