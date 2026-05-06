import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export interface AnimatedHeadlineProps {
  prefix?: string;
  words?: string[];
  interval?: number;
  className?: string;
}

const DEFAULT_WORDS = ['explore.', 'write.', 'push.', 'show up.', 'build.'];

export function AnimatedHeadline({
  prefix = 'Get out and',
  words = DEFAULT_WORDS,
  interval = 3000,
  className = '',
}: AnimatedHeadlineProps) {
  const [index, setIndex] = useState(0);
  const [wordSlotWidth, setWordSlotWidth] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    const measure = () => {
      let max = 0;
      for (const w of words) {
        el.textContent = w;
        max = Math.max(max, el.getBoundingClientRect().width);
      }
      // Small buffer: per-letter spans can kern slightly wider than one measurement string.
      setWordSlotWidth(Math.ceil(max) + 2);
    };

    measure();
    document.fonts.ready.then(measure);
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const sentenceContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      filter: 'blur(4px)',
      transition: { duration: 0.2 },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, x: 5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 150, damping: 15 },
    },
  };

  return (
    <div
      className={`flex flex-nowrap items-baseline justify-start text-[34px] sm:text-[50px] md:text-[72px] lg:text-[70px] ${className}`}
    >
      <span className="font-heading font-medium tracking-tight text-[#F2F4F6] whitespace-nowrap mr-[0.25em]">
        {prefix}
      </span>

      <span
        ref={measureRef}
        className="font-handwriting invisible absolute left-0 top-0 whitespace-nowrap pointer-events-none"
        aria-hidden
      />

      <div
        className="relative inline-flex shrink-0 items-baseline justify-start min-h-[1em]"
        style={
          wordSlotWidth > 0
            ? { width: wordSlotWidth, minWidth: wordSlotWidth }
            : undefined
        }
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            variants={sentenceContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="font-handwriting text-[#F2F4F6] flex flex-nowrap items-center"
            style={{ whiteSpace: 'nowrap' }}
          >
            {words[index].split('').map((char, i) => (
              <motion.span
                key={`${words[index]}-${i}`}
                variants={letterVariant}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
