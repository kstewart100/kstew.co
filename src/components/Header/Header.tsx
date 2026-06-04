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
  const isHome = variant === 'home';
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHome) {
    return (
      <header
        data-id={dataId}
        className={`w-full px-6 md:px-12 py-6 text-white ${className}`}
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
              className="block h-8 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
            />
          </Link>

          <div className="hidden md:block font-heading font-medium text-sm">
            Kyle Stewart
            <span className="mx-3 opacity-50">·</span>
            Content design
          </div>

          <a
            href="mailto:hello@kstew.co"
            aria-label="Contact by email"
            className="font-mono text-sm underline underline-offset-4 decoration-1 transition-colors hover:text-white/70 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
          >
            Contact
          </a>
        </div>
      </header>
    );
  }

  return (
    <header
      data-id={dataId}
      className={`w-full font-sans bg-inherit ${className}`}
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-[minmax(0,auto)_minmax(0,1fr)_auto] gap-4 items-center h-16 w-full px-5 md:px-8 lg:px-10">
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          className="inline-flex min-h-0 shrink-0 items-center self-center transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo.png"
            alt="Kyle Stewart home"
            width={160}
            height={28}
            decoding="async"
            className="block h-7 max-h-7 w-auto shrink-0 object-contain object-left"
          />
        </Link>

        <h1 className="font-sans font-medium text-sm md:text-base text-center whitespace-nowrap tracking-tight text-[#1a1a1a]">
          Kyle Stewart
        </h1>

        <a
          href="mailto:hello@kstew.co"
          aria-label="Contact by email"
          className="font-sans font-medium text-sm tracking-tight transition-colors whitespace-nowrap justify-self-end min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-[#1a1a1a] hover:text-[#294050]"
        >
          Contact
        </a>
      </div>
    </header>
  );
};
