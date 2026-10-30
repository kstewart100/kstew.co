import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  contactMessages,
  type ContactIconName,
} from '../data/contactMessages';

type ContactButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

const SWAP_TRANSITION = { duration: 0.85, ease: [0.4, 0, 0.2, 1] } as const;

const DOT_POSITIONS = [8, 12, 16];

function MessageIcon() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 24 24"
      className="h-5 w-5 overflow-visible"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ originX: 0.2, originY: 0.9 }}
      initial={reduceMotion ? false : { scale: 0.6, rotate: -12 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.1 }}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      {DOT_POSITIONS.map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={12}
          r={0.9}
          fill="currentColor"
          strokeWidth={1.25}
          animate={reduceMotion ? undefined : { y: [0, -1.75, 0] }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.5,
            delay: 0.3 + i * 0.12,
          }}
        />
      ))}
    </motion.svg>
  );
}

function WaveIcon() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="flex h-5 w-5 items-center justify-center"
      style={{ originX: 0.7, originY: 0.9 }}
      animate={
        reduceMotion ? undefined : { rotate: [0, 16, -8, 16, -4, 10, 0] }
      }
      transition={{
        duration: 1.3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 0.8,
        delay: 0.2,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
        <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    </motion.span>
  );
}

const ICONS: Record<ContactIconName, () => React.ReactElement> = {
  message: MessageIcon,
  wave: WaveIcon,
};

export function ContactButton({
  href = 'mailto:hello@kstew.co',
  label = 'Contact me',
  className = '',
}: ContactButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeMessage = contactMessages[messageIndex];
  const text = isActive ? activeMessage.text : label;
  const Icon = isActive ? ICONS[activeMessage.icon] : null;

  const activate = () => setIsActive(true);
  const deactivate = () => {
    setIsActive(false);
    setMessageIndex((i) => (i + 1) % contactMessages.length);
  };

  const transition = reduceMotion ? { duration: 0.2 } : SWAP_TRANSITION;

  const rowMotion = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { y: '110%', opacity: 0 },
        animate: { y: '0%', opacity: 1 },
        exit: { y: '-110%', opacity: 0, position: 'absolute' as const },
      };

  const pillClassName =
    'inline-flex min-h-[44px] items-center rounded-full px-5 py-2 font-heading text-sm font-semibold leading-6 md:px-6 md:text-base';

  return (
    <>
      <a
        href={href}
        aria-label={label}
        className={`md:hidden ${pillClassName} whitespace-nowrap bg-color-accent-hero text-color-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-color-text-primary focus-visible:ring-offset-2 ${className}`}
      >
        {label}
      </a>
      <span className={`relative hidden md:inline-flex shrink-0 ${className}`}>
        <span aria-hidden="true" className={`${pillClassName} invisible`}>
          {label}
        </span>
        <motion.a
          href={href}
          layout
          initial={false}
          onMouseEnter={activate}
          onMouseLeave={deactivate}
          onFocus={activate}
          onBlur={deactivate}
          whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          aria-label={label}
          transition={transition}
          className={`${pillClassName} absolute right-0 top-0 z-10 origin-right whitespace-nowrap bg-color-accent-hero text-color-text-primary transition-colors duration-500 hover:bg-color-accent-hero-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-color-text-primary focus-visible:ring-offset-2`}
        >
          <span className="relative block h-7 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.span
                key={text}
                className="flex h-7 items-center gap-2 whitespace-nowrap"
                {...rowMotion}
                transition={transition}
              >
                {Icon && (
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <Icon />
                  </span>
                )}
                {text}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.a>
      </span>
    </>
  );
}
