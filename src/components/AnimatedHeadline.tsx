import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface AnimatedHeadlineProps {
  words?: string[];
  interval?: number;
  className?: string;
}

const DEFAULT_WORDS = ['explore', 'write', 'push', 'show up', 'build'];

const HEADLINE_FONT_SIZE = 'clamp(4rem, 12vw, 9rem)';

export function AnimatedHeadline({
  words = DEFAULT_WORDS,
  interval = 2400,
  className = '',
}: AnimatedHeadlineProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordSlotWidth, setWordSlotWidth] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);
  const measureRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      let max = 0;
      for (const word of words) {
        el.textContent = `${word}.`;
        max = Math.max(max, el.getBoundingClientRect().width);
      }
      const buffer = document.fonts.status === 'loaded' ? 2 : 12;
      setWordSlotWidth(Math.ceil(max) + buffer);
      el.textContent = '';
    };

    measure();
    document.fonts.ready.then(() => {
      measure();
      setFontsReady(true);
    });
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [words]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) {
      setWordIndex(words.length - 1);
      return;
    }

    if (!fontsReady) return;

    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, fontsReady]);

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -8,
      filter: 'blur(6px)',
      transition: { duration: 0.28, ease: 'easeIn' },
    },
  };

  return (
    <div className={`text-center md:text-right ${className}`}>
      <h1
        className="font-heading font-black text-white tracking-tight leading-[0.95]"
        style={{ fontSize: HEADLINE_FONT_SIZE }}
      >
        Get out.
      </h1>
      <div
        className="font-handwriting mt-2 md:mt-4 leading-[0.95] whitespace-nowrap"
        style={{
          color: '#1AFF66',
          fontSize: HEADLINE_FONT_SIZE,
        }}
      >
        <span
          className="relative inline-block align-baseline text-center md:text-right"
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
          <AnimatePresence mode="wait">
            <motion.span
              key={words[wordIndex]}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="inline-block w-full"
            >
              {words[wordIndex]}.
            </motion.span>
          </AnimatePresence>
        </span>
      </div>
    </div>
  );
}
