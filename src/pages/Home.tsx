import React from 'react';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WorkCard } from '../components/WorkCard';
import { caseStudies } from '../data/caseStudies';

const HERO_IMAGE = 'url("/images/hero-queenstown.jpg")';

export function Home() {
  return (
    <div className="home-page w-full min-h-screen bg-color-bg-surface text-color-text-primary font-mono selection:bg-color-interactive selection:text-white">
      <div className="relative h-[80vh] w-full overflow-hidden md:h-[calc(100svh-140px)]">
        <div className="absolute top-0 left-0 right-0 z-20 w-full bg-transparent">
          <Header variant="home" />
        </div>

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 md:from-black/25 to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 via-black/35 to-transparent pointer-events-none z-[5] md:h-1/3 md:from-black/70 md:via-black/35" />

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

        <div className="film-grain z-[6]" aria-hidden="true" />

        <div className="absolute inset-0 z-10 flex items-end md:items-center justify-center md:justify-end pb-20 md:pb-0 pointer-events-none">
          <div className="w-full px-6 md:px-12">
            <div className="container mx-auto max-w-6xl">
              <AnimatedHeadline />
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-10 z-20 px-6 md:px-12 pointer-events-none lg:bottom-12">
          <div className="container mx-auto max-w-6xl">
            <p className="font-mono text-[11px] sm:text-xs lg:text-sm text-white/90 text-right drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
              Queenstown, New Zealand. April 2025.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-8 drop-shadow-navy-soft md:mt-0">
        <main id="main-content" className="relative z-10 w-full">
          <div className="film-grain z-0" aria-hidden="true" />
          <div className="relative z-10 container mx-auto max-w-6xl px-6 md:px-12 pt-6 md:pt-8 pb-6 md:pb-10">
            <section aria-label="Case studies" className="mb-6 md:mb-10">
              <h2 className="text-[40px] font-heading mb-8 tracking-tight text-color-text-primary font-[600]">
                Look around
              </h2>

              <div className="work-card-grid grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {caseStudies.map((study) => (
                  <WorkCard
                    key={study.slug}
                    label={study.label}
                    title={study.title}
                    href={`/${study.slug}`}
                  />
                ))}
              </div>
            </section>

            <section id="about">
              <div className="bg-color-bg-surface p-8 md:p-12 w-full border-2 [border-color:var(--color-blue-600)]">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 tracking-tight text-color-text-primary leading-snug">
                  About me
                </h2>
                <div className="space-y-6 text-[18px] leading-relaxed text-color-text-secondary">
                  <p>
                    I&apos;m a Bay Area native and content designer with 10+ years
                    building user experiences across startups, agencies, and
                    companies like Google and Intuit. Above all else, I love
                    creating and collaborating.
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
