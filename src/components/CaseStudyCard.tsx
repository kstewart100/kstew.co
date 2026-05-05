import React from 'react';
import { Link } from 'react-router-dom';

export interface CaseStudyCardProps {
  title: string;
  description: string;
  href: string;
  glowColor: string;
  logoUrl?: string;
  logoAlt?: string;
}

export function CaseStudyCard({
  title,
  description,
  href,
  glowColor,
  logoUrl,
  logoAlt,
}: CaseStudyCardProps) {
  return (
    <Link
      to={href}
      className="block rounded-2xl border relative group cursor-pointer backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.015] border-[rgba(239,228,204,0.3)] hover:border-[var(--color-border-accent)] focus-visible:border-[var(--color-border-accent)]"
      style={{
        backgroundColor: 'rgba(41, 64, 80, 0.4)',
        boxShadow: `0 8px 32px ${glowColor}`,
      }}
    >
      <div
        className="absolute top-3 right-3 w-7 h-7 rounded-lg flex items-center justify-center border border-[rgba(239,228,204,0.2)] bg-[rgba(239,228,204,0.06)] group-hover:border-[var(--color-border-accent)] group-hover:bg-[var(--color-border-accent)] group-hover:scale-110"
        style={{
          transition:
            'transform 300ms ease-out, border-color 200ms ease, background-color 200ms ease',
        }}
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[rgba(239,228,204,0.5)] group-hover:text-white"
          style={{ transition: 'color 200ms ease' }}
        >
          <path
            d="M6.5 1.5H9.5V4.5M4.5 9.5H1.5V6.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-end h-full min-h-[280px] md:min-h-[300px] p-6 md:p-8 transition-transform duration-300 ease-out group-hover:-translate-y-2">
        <div>
          {logoUrl && (
            <div className="h-8 md:h-9 w-[100px] md:w-[110px] mb-4">
              <img
                src={logoUrl}
                alt={logoAlt ?? ''}
                className="h-full w-full object-contain object-left [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(21%)_saturate(318%)_hue-rotate(346deg)_brightness(102%)_contrast(93%)]"
              />
            </div>
          )}
          <h3
            className="text-2xl md:text-3xl font-sans font-bold mb-3"
            style={{ color: 'var(--color-primitive-cream)' }}
          >
            {title}
          </h3>
          <p
            className="text-lg line-clamp-2"
            style={{ color: 'rgba(239, 228, 204, 0.8)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
