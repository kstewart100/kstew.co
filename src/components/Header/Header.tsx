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
  return (
    <header
      data-id={dataId}
      className={`w-full font-sans ${isHome ? 'bg-transparent' : 'bg-color-bg-canvas'} ${className}`}
    >
      <div
        className={`max-w-[1280px] mx-auto grid grid-cols-[auto_1fr_auto] gap-4 items-center h-16 w-full ${isHome ? 'px-6 md:px-16 lg:px-20' : 'px-5 md:px-8 lg:px-10'}`}
      >
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/69321d8f305635d733809f43_Logo%20V3.png"
            alt="Kyle Stewart home"
            className={`h-7 w-fit ${isHome ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        {isHome ? (
          <span
            className="font-sans font-medium text-sm md:text-base text-center whitespace-nowrap tracking-tight text-white/90"
          >
            Kyle Stewart
          </span>
        ) : (
          <h1
            className="font-sans font-medium text-sm md:text-base text-center whitespace-nowrap tracking-tight text-[#1a1a1a]"
          >
            Kyle Stewart
          </h1>
        )}

        <a
          href="mailto:hello@kstew.co"
          aria-label="Contact by email"
          className={`font-sans font-medium text-sm tracking-tight transition-colors whitespace-nowrap justify-self-end min-h-[44px] min-w-[44px] inline-flex items-center justify-center ${isHome ? 'text-white/90 hover:text-white' : 'text-[#1a1a1a] hover:text-[#294050]'}`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};
