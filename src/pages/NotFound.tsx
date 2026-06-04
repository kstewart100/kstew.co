import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PAGE_TITLE = 'Page not found — Kyle Stewart';

export function NotFound() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    return () => {
      document.title = 'Kyle Stewart — Portfolio';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-color-text-primary font-mono selection:bg-color-primitive-blue selection:text-white">
      <Header variant="case-study" />
      <main
        id="main-content"
        className="flex-1 container mx-auto max-w-6xl px-6 md:px-12 py-24 md:py-32"
      >
        <p className="font-mono text-sm text-color-text-secondary mb-4">
          404
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-[-0.02em] text-color-text-primary mb-6">
          This page isn&apos;t on the map
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-color-text-secondary max-w-xl mb-10">
          The link may be outdated, or the page may have moved. Head back to the
          portfolio to explore recent work.
        </p>
        <Link
          to="/"
          className="inline-flex items-center min-h-[44px] font-mono text-sm underline underline-offset-4 decoration-1 text-color-text-primary hover:text-color-interactive-primary transition-colors"
        >
          Back to home
        </Link>
      </main>
      <Footer variant="home" />
    </div>
  );
}
