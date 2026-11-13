import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactButton } from '../ContactButton';
import { KBadge } from './KBadge';

export interface HeaderProps {
  className?: string;
  'data-id'?: string;
}

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

export const Header: React.FC<HeaderProps> = ({
  className = '',
  'data-id': dataId,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(!isHomePage);
  const [veil, setVeil] = useState(isHomePage ? 0 : 1);

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      setVeil(1);
      return undefined;
    }

    setScrolled(false);
    setVeil(0);

    const update = () => {
      const hero = document.querySelector<HTMLElement>('[data-home-hero]');
      const headerEl = document.querySelector<HTMLElement>('.site-header');
      const headerOffset = headerEl?.getBoundingClientRect().height ?? 72;

      if (!hero) {
        const fallback = window.scrollY > 24 ? 1 : 0;
        setVeil(fallback);
        setScrolled(fallback >= 0.55);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const range = Math.max(1, rect.height - headerOffset);
      // 0 at hero top → 1 when hero bottom reaches the header (case-study white)
      const progress = clamp01(1 - (rect.bottom - headerOffset) / range);

      setVeil(progress);
      // Ink morph once the veil is strong enough to need dark chrome
      setScrolled(progress >= 0.55);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [isHomePage, location.pathname]);

  return (
    <header
      data-id={dataId}
      className={`site-header${scrolled ? ' site-header--scrolled' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={
        {
          '--header-veil': veil,
        } as React.CSSProperties
      }
    >
      <div className="site-header__inner container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12">
        <Link
          to="/"
          aria-current={isHomePage ? 'page' : undefined}
          aria-label="Kyle Stewart home"
          className="site-header__brand justify-self-start inline-flex items-center"
        >
          <KBadge />
        </Link>

        <div className="site-header__title hidden md:block font-medium !font-heading">
          Kyle Stewart
          <span className="site-header__title-sep">·</span>
          Senior Content Designer
        </div>

        <div className="justify-self-end">
          <ContactButton />
        </div>
      </div>
    </header>
  );
};
