import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactButton } from '../ContactButton';

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
        isCaseStudy ? 'text-color-text-primary' : 'text-color-text-on-dark'
      } ${className}`}
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          aria-label="Kyle Stewart home"
          className="justify-self-start inline-flex items-center group transition-opacity hover:opacity-80"
        >
          <img
            src={isCaseStudy ? '/images/k-badge.svg' : '/images/k-badge-reversed.svg'}
            alt=""
            width={40}
            height={40}
            decoding="async"
            className="block h-10 w-10 transition-opacity group-hover:opacity-80"
          />
        </Link>

        <div className={taglineClassName}>
          Kyle Stewart
          <span className="mx-3 opacity-50">·</span>
          Senior Content Designer
        </div>

        <div className="justify-self-end">
          <ContactButton />
        </div>
      </div>
    </header>
  );
};
