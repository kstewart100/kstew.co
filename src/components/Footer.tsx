import React from 'react';
import { Link } from 'react-router-dom';

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-color-bg-inverse py-16 text-color-text-on-dark">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <Link
          to="/"
          aria-label="Kyle Stewart home"
          className="inline-flex items-center mb-4 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/k-badge-reversed.svg"
            alt=""
            width={40}
            height={40}
            decoding="async"
            className="block h-10 w-10"
          />
        </Link>

        <p className="text-sm max-w-lg mb-8 leading-relaxed text-color-text-on-dark">
          Made with care across California, New Zealand, and many other places
          with support from excellent friends.
        </p>

        <div className="flex items-center gap-6 mb-8 text-sm">
          <a
            href="https://linkedin.com/in/kylestewart100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kyle Stewart on LinkedIn"
            className="flex items-center gap-1 text-color-text-on-dark hover:text-color-text-on-dark-muted transition-colors group min-h-[44px] min-w-[44px]"
          >
            LinkedIn{' '}
            <ArrowUpRight className="w-4 h-4 text-color-text-on-dark-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-[var(--motion-duration-short3)] ease-[var(--motion-easing-standard)]" />
          </a>
        </div>

        <div className="font-mono text-xs text-color-text-on-dark-muted">
          © Kyle Stewart 2026 · All rights reserved.
        </div>
      </div>
    </footer>
  );
}
