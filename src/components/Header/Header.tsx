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
      className={`w-full font-body ${isHome ? 'bg-transparent' : 'bg-color-bg-canvas'} ${className}`}
    >
      <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-center px-5 md:px-8 lg:px-10 h-16 max-w-[1024px] mx-auto">
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          className="flex items-center transition-opacity hover:opacity-80"
        >
          <img
            src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/69321d8f305635d733809f43_Logo%20V3.png"
            alt="Logo"
            className={`h-7 w-auto ${isHome ? 'brightness-0 invert' : ''}`}
            loading="lazy"
          />
        </Link>

        <h1
          className={`font-body font-medium text-sm md:text-base text-center whitespace-nowrap tracking-tight ${isHome ? 'text-white/90' : 'text-color-text-primary/90'}`}
        >
          Kyle Stewart
        </h1>

        <a
          href="mailto:hello@kstew.co"
          className={`font-body font-medium text-sm tracking-tight transition-colors whitespace-nowrap justify-self-end ${isHome ? 'text-white/90 hover:text-white' : 'text-color-text-primary/90 hover:text-color-interactive-primary'}`}
        >
          Contact
        </a>
      </div>
    </header>
  );
};
