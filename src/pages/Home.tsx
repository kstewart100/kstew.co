import React from 'react';
import { AnimatedHeadline } from '../components/AnimatedHeadline';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WorkCard } from '../components/WorkCard';
import { caseStudies } from '../data/caseStudies';

const HERO_IMAGE = 'url("/images/hero-routburn.jpg")';

export function Home() {
  return (
    <div className="home-page w-full min-h-screen bg-white text-color-text-primary font-mono selection:bg-color-primitive-blue selection:text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute top-0 left-0 right-0 z-20 w-full">
          <Header variant="home" />
        </div>

        <div className="absolute inset-x-0 top-0 h-56 md:h-32 bg-gradient-to-b from-black/55 md:from-black/25 to-transparent pointer-events-none z-[5]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/65 via-black/30 to-transparent pointer-events-none z-[5] md:h-1/3 md:from-black/70 md:via-black/35" />

        <div
          className="hidden md:block absolute right-0 bottom-0 w-full h-full bg-no-repeat"
          style={{
            backgroundImage: HERO_IMAGE,
            backgroundSize: '150%',
            backgroundPosition: '75% 55%',
          }}
        />
        <div
          className="block md:hidden absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: HERO_IMAGE,
            backgroundSize: '330%',
            backgroundPosition: '35% 60%',
          }}
        />

        <div className="absolute inset-0 z-10 flex items-start md:items-center justify-center md:justify-end pt-24 md:pt-0 pointer-events-none">
          <div className="container mx-auto max-w-6xl px-6 md:px-12 w-full">
            <AnimatedHeadline />
          </div>
        </div>

        <div className="absolute bottom-10 right-6 left-6 z-20 pointer-events-none md:left-auto lg:bottom-12 lg:right-12">
          <p className="font-mono text-[11px] sm:text-xs lg:text-sm text-white/90 text-right drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
            Routeburn Track in New Zealand. April 2025.
          </p>
        </div>
      </div>

      <div
        className="relative z-10 -mt-8"
        style={{
          filter: 'drop-shadow(0 -1px 3px rgba(41, 64, 80, 0.10))',
        }}
      >
        <main id="main-content" className="relative z-10 w-full">
          <div className="container mx-auto max-w-6xl px-6 md:px-12 pt-6 md:pt-8 pb-6 md:pb-8">
            <section aria-label="Case studies" className="mb-28 md:mb-36">
              <h2 className="text-[40px] font-heading mb-8 tracking-tight text-color-text-primary font-[600]">
                Look around
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
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

            <section
              id="about"
              className="relative overflow-visible md:min-h-[28rem] lg:min-h-[30rem] md:py-10 lg:py-14 md:pb-10 lg:pb-10"
            >
              <div className="about-card bg-color-bg-surface p-8 md:p-12 w-full md:w-[85%] relative z-10 border border-black">
                <div className="about-text">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 tracking-tight text-color-text-primary leading-snug">
                    About me
                  </h2>
                  <div className="space-y-6 text-sm md:text-base leading-relaxed text-color-text-secondary">
                    <p>
                      I&apos;m a Bay Area native and content designer with 10+
                      years building user experiences across startups, agencies,
                      and companies like Google and Intuit. Above all else, I love
                      creating and collaborating.
                    </p>
                    <p>
                      These days I&apos;m in the Inner Sunset, running Golden Gate
                      Park, cycling Marin&apos;s hills, and planning my next
                      backpacking trip.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-0 md:absolute md:right-0 lg:right-2 md:top-1/2 md:-translate-y-1/2 z-20 w-full md:w-[min(100%,360px)] lg:w-[400px] overflow-visible">
                <img
                  src="/images/about-portrait.png"
                  alt="Portrait of Kyle in the mountains"
                  className="about-portrait w-full h-auto"
                  loading="lazy"
                />
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
