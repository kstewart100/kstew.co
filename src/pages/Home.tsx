import React from 'react';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { Footer } from '../components/Footer';
import { WorkCard } from '../components/WorkCard';
import { caseStudies } from '../data/caseStudies';

const HERO_IMAGE = 'url("/images/hero-queenstown.jpg")';

export function Home() {
  return (
    <div className="home-page w-full min-h-screen bg-color-bg-surface text-color-text-primary font-body selection:bg-color-interactive selection:text-color-text-on-dark">
      <div
        data-home-hero
        className="relative h-[80vh] w-full overflow-hidden md:h-[calc(100svh-140px)]"
      >
        <div
          className="hidden md:block absolute right-0 bottom-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: HERO_IMAGE,
            backgroundSize: 'cover',
            backgroundPosition: 'center 22%',
          }}
        />
        <div
          className="block md:hidden absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: HERO_IMAGE,
            backgroundSize: 'cover',
            backgroundPosition: '18% 20%',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hero-scrim pointer-events-none"
        />

        <div className="absolute inset-0 z-10 flex items-end md:items-center justify-center md:justify-end pb-20 md:pb-0 pointer-events-none">
          <div className="w-full px-6 md:px-12">
            <div className="container mx-auto max-w-6xl">
              <AnimatedHeadline />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-20 px-6 md:px-12 pointer-events-none md:bottom-3">
          <div className="container mx-auto max-w-6xl">
            <p className="font-mono text-xs lg:text-sm text-color-text-on-dark-muted text-right">
              Queenstown, New Zealand. April 2025.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing from hero plane (high-contrast edge) to first content */}
      <div className="relative z-10 -mt-8 drop-shadow-navy-soft md:mt-0">
        <main id="main-content" className="relative z-10 w-full">
          <div className="relative z-10 container mx-auto max-w-6xl px-6 md:px-12 pt-8 md:pt-16 pb-8 md:pb-16">
            <section aria-label="Case studies" className="mb-8 md:mb-16">
              <h2 className="text-[28px] md:text-[40px] font-heading font-semibold leading-tight mb-8 text-color-text-primary">
                Here&apos;s the proof
              </h2>

              <div className="work-card-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {caseStudies.map((study) => (
                  <WorkCard
                    key={study.slug}
                    label={study.label}
                    title={study.title}
                    outcome={study.outcome}
                    href={`/${study.slug}`}
                  />
                ))}
              </div>
            </section>

            <section id="about">
              <div className="bg-color-bg-surface p-8 md:p-12 w-full border rounded-surface [border-color:var(--color-blue-600)] shadow-navy-md">
                <h2 className="text-[28px] md:text-[40px] font-heading font-semibold mb-8 text-color-text-primary leading-tight">
                  About me
                </h2>
                <div className="space-y-6 max-w-[65ch] font-body text-[18px] leading-relaxed text-color-text-secondary">
                  <p>
                    I&apos;m a Bay Area native and content designer with 10+ years
                    across startups, agencies, Google, and Intuit. I design
                    content for products that feel good to use.
                  </p>
                  <p>
                    If you&apos;re building something like that and want a content
                    design partner, I&apos;d love to talk.
                  </p>
                  <p>
                    These days I&apos;m in the Inner Sunset, running Golden Gate
                    Park, cycling Marin&apos;s hills, and planning my next
                    backpacking trip.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
