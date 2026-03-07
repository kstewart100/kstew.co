import React, { lazy } from 'react';
export interface HeaderProps {
  variant?: 'home' | 'case-study';
  className?: string;
  'data-id'?: string;
}
export const Header: React.FC<HeaderProps> = ({
  variant = 'case-study',
  className = '',
  'data-id': dataId
}) => {
  const isHome = variant === 'home';
  return (
    <header
      data-id={dataId}
      className={`w-full font-body ${isHome ? 'bg-transparent' : 'bg-color-bg-canvas'} ${className}`}>

      <div className="grid grid-cols-[auto_1fr_auto] gap-4 md:gap-5 items-center px-4 md:px-6 lg:px-10 h-[75px]">
        {/* Logo Section */}
        <div className="flex items-center justify-start">
          <a
            href="/"
            aria-current="page"
            className="flex items-center transition-opacity hover:opacity-80">

            <img
              src="https://cdn.prod.website-files.com/602f5fbae86a0b9121ed61b1/69321d8f305635d733809f43_Logo%20V3.png"
              alt="Logo"
              className={`h-[32px] w-auto ${isHome ? 'brightness-0 invert' : ''}`}
              loading="lazy" />

          </a>
        </div>

        {/* Name Section */}
        <div className="flex items-center justify-center">
          <h1
            className={`font-body font-bold text-base md:text-xl lg:text-2xl text-center whitespace-nowrap ${isHome ? 'text-white' : 'text-color-text-primary'}`}>

            Kyle Stewart
          </h1>
        </div>

        {/* Email Section */}
        <div className="flex items-center justify-end">
          <a
            href="mailto:hello@kstew.co"
            className={`font-body text-xs md:text-sm transition-colors whitespace-nowrap ${isHome ? 'text-white hover:text-gray-200' : 'text-color-text-primary hover:text-color-interactive-primary'}`}>

            hello@kstew.co
          </a>
        </div>
      </div>
    </header>);

};