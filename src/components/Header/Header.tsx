import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface HeaderProps {
  variant?: 'home' | 'case-study';
  className?: string;
  'data-id'?: string;
}

export const Header: React.FC<HeaderProps> = ({
  variant = 'case-study',
  className = '',
  'data-id': dataId,
}) => {
  const isCaseStudy = variant === 'case-study';
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const taglineClassName =
    'hidden md:block font-medium text-lg tracking-normal !font-heading';

  return (
    <header
      data-id={dataId}
      className={`w-full px-6 md:px-12 py-6 ${
        isCaseStudy ? 'text-black' : 'text-white'
      } ${className}`}
    >
      <div className="container mx-auto max-w-6xl flex items-center justify-between">
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          aria-label="Kyle Stewart home"
          className="inline-flex items-center group transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="Kyle Stewart home"
            width={160}
            height={28}
            decoding="async"
            className={`block h-8 w-auto transition-opacity group-hover:opacity-80 ${
              isCaseStudy ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        <div className={taglineClassName}>
          Kyle Stewart
          <span className="mx-3 opacity-50">·</span>
          Content Design
        </div>

        <a
          href="mailto:hello@kstew.co"
          aria-label="Contact by email"
          className={`font-mono text-sm underline underline-offset-4 decoration-1 transition-colors min-h-[44px] min-w-[44px] inline-flex items-center justify-center ${
            isCaseStudy ? 'hover:text-black/70' : 'hover:text-white/70'
          }`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};
