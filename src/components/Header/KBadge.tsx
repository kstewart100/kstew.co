import React from 'react';

type KBadgeProps = {
  className?: string;
};

/** Single badge; fill/stroke follow --header-badge-* on the site header. */
export function KBadge({ className = '' }: KBadgeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={36}
      height={36}
      className={`site-header__badge block h-9 w-9 ${className}`.trim()}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="var(--header-badge-fill)" />
      <g
        fill="none"
        stroke="var(--header-badge-stroke)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 6.5V17.5" />
        <path d="M9.5 13.4C11.4 11.1 13.4 9.4 15.8 8.2" />
        <path d="M10.4 12.6C12.6 12.9 13.9 14.3 15.5 17.3" />
      </g>
    </svg>
  );
}
