import React from 'react';

interface FooterProps {
  variant?: 'home' | 'case-study';
}

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

export function Footer({ variant = 'case-study' }: FooterProps) {
  const isHome = variant === 'home';

  if (isHome) {
    return (
      <footer className="bg-white py-16 px-6 md:px-12 border-t border-color-border-default">
        <div className="container mx-auto max-w-6xl">
          <p className="text-sm max-w-lg mb-12 leading-relaxed text-color-text-primary">
            Made with care across California, New Zealand, and many other places
            with support from excellent friends.
          </p>

          <div className="flex items-center gap-8 mb-16 text-sm">
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

  return (
    <footer className="w-full relative z-10 py-16 md:py-20 mt-10 text-[#1a1a1a] bg-inherit">
      <div className="mx-auto text-left max-w-[1024px] px-5 md:px-8 lg:px-10">
        <p className="text-base md:text-lg mb-8 text-gray-600">
          Made with care across California, New Zealand, and many other places
          with support from excellent friends.
        </p>
        <div className="flex items-center gap-6 mb-8">
          <a
            href="mailto:hello@kstew.co"
            aria-label="Email Kyle"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors text-sm md:text-base text-gray-600 hover:text-[#1a1a1a]"
          >
            Email
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://linkedin.com/in/kylestewart100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kyle Stewart on LinkedIn"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors text-sm md:text-base text-gray-600 hover:text-[#1a1a1a]"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-sm md:text-base text-gray-500">
          © Kyle Stewart 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
