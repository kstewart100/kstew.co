import React from 'react';
interface FooterProps {
  variant?: 'home' | 'case-study';
}
export function Footer({ variant = 'case-study' }: FooterProps) {
  const isHome = variant === 'home';
  return (
    <footer
      className={`w-full relative z-10 ${isHome ? 'pt-32 pb-16 text-[#F5E6D3]' : 'py-16 md:py-20 mt-10 text-[#1a1a1a] bg-[#EFF0F3]'}`}
    >
      <div
        className={`mx-auto text-left ${isHome ? 'max-w-[1280px] px-6 md:px-16 lg:px-20' : 'max-w-[1024px] px-5 md:px-8 lg:px-10'}`}
      >
        <p
          className={`text-base md:text-lg mb-8 ${isHome ? 'text-[#F5E6D3]/80' : 'text-gray-600'}`}>

          Made with care across California, New Zealand, and many other places
          with support from excellent friends.
        </p>
        <div className="flex items-center gap-6 mb-8">
          <a
            href="mailto:hello@kstew.co"
            aria-label="Email Kyle"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors text-sm md:text-base ${isHome ? 'text-[#F5E6D3]/80 hover:text-[#D4956B]' : 'text-gray-600 hover:text-[#1a1a1a]'}`}
          >
            Email
          </a>
          <span className={isHome ? 'text-[#F5E6D3]/40' : 'text-gray-400'}>
            •
          </span>
          <a
            href="https://linkedin.com/in/kylestewart100"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kyle Stewart on LinkedIn"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors text-sm md:text-base ${isHome ? 'text-[#F5E6D3]/80 hover:text-[#D4956B]' : 'text-gray-600 hover:text-[#1a1a1a]'}`}
          >
            LinkedIn
          </a>
        </div>
        <p
          className={`text-sm md:text-base ${isHome ? 'text-[#F5E6D3]/60' : 'text-gray-500'}`}>

          © Kyle Stewart 2026 All rights reserved.
        </p>
      </div>
    </footer>);

}
