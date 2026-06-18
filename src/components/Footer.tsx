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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-color-border-default">
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        <Link
          to="/"
          aria-label="Kyle Stewart home"
          className="inline-flex items-center mb-4 transition-opacity hover:opacity-80"
        >
          <img
            src="/images/logo-black.png"
            alt=""
            width={160}
            height={28}
            decoding="async"
            className="block h-8 w-auto"
          />
        </Link>

        <p className="text-sm max-w-lg mb-8 leading-relaxed text-color-text-primary">
          Made with care across California, New Zealand, and many other places
          with support from excellent friends.
        </p>

        <div className="flex items-center gap-6 mb-8 text-sm">
          <a
            href="mailto:hello@kstew.co"
            aria-label="Email Kyle"
            className="flex items-center gap-1 text-color-text-primary hover:text-color-interactive-primary transition-colors group min-h-[44px] min-w-[44px]"
          >
            Email{' '}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <span className="text-color-border-default">•</span>
          <a
            href="https://linkedin.com/in/kylestewart100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kyle Stewart on LinkedIn"
            className="flex items-center gap-1 text-color-text-primary hover:text-color-interactive-primary transition-colors group min-h-[44px] min-w-[44px]"
          >
            LinkedIn{' '}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="text-xs text-color-text-secondary">
          © Kyle Stewart 2026 All rights reserved.
        </div>
      </div>
    </footer>
  );
}
