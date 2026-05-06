import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TickerBanner } from '../components/TickerBanner';
import { CaseStudyCard } from '../components/CaseStudyCard';
import { Photo } from '../components/Photo';
const PAGE_TITLE = 'Kyle Stewart — Portfolio';
const BG_STOPS = [
{
  pct: 0,
  hex: '#5AAEE8'
},
{
  pct: 0.7,
  hex: '#1F4470'
},
{
  pct: 0.85,
  hex: '#0F2440'
},
{
  pct: 1,
  hex: '#294050'
}];

const caseStudies = [
{
  title: 'Expert scheduling',
  description: "Simplified scheduling for Intuit's tax experts.",
  href: '/expert-scheduling',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/Intuit_idITTG9Sz3_0.svg",

  logoAlt: 'Intuit'
},
{
  title: 'Conversion goal updates',
  description: 'Guided Google Ads users through updates with clarity.',
  href: '/conversion-goal-updates',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png",

  logoAlt: 'Google'
},
{
  title: 'Flexible lift confidence',
  description:
  'Made results clearer and actionable for Google Ads lift users.',
  href: '/flexible-lift-confidence',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png",

  logoAlt: 'Google'
},
{
  title: 'Measurement setup',
  description: 'Made measurement accessible for all Google Ads users.',
  href: '/measurement-setup',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png",

  logoAlt: 'Google'
}];

function hexToRgb(hex: string): [number, number, number] {
  return [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16)];

}
function lerpColor(a: string, b: string, t: number): string {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  return `rgb(${Math.round(ra[0] + (rb[0] - ra[0]) * t)}, ${Math.round(ra[1] + (rb[1] - ra[1]) * t)}, ${Math.round(ra[2] + (rb[2] - ra[2]) * t)})`;
}
function getScrollBackgroundColor(progress: number): string {
  const p = Math.min(Number(progress) || 0, 1);
  for (let i = 0; i < BG_STOPS.length - 1; i++) {
    const s = BG_STOPS[i];
    const e = BG_STOPS[i + 1];
    if (p >= s.pct && p <= e.pct) {
      return lerpColor(s.hex, e.hex, (p - s.pct) / (e.pct - s.pct));
    }
  }
  return BG_STOPS[BG_STOPS.length - 1].hex;
}
export function Home() {
  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);
  const { scrollYProgress } = useScroll();
  const pageBgColor = useTransform(scrollYProgress, getScrollBackgroundColor);
  const glowOpacity = useTransform(scrollYProgress, (p) =>
  Math.max(0, 1 - p / 0.25)
  );
  return (
    <>
      <div className="relative w-full">
        <div
          className="absolute top-0 left-0 right-0 z-[50] w-full"
          style={
            {
              '--color-text-primary': '#F5E6D3',
              '--color-bg-canvas': 'transparent',
              '--color-interactive-primary': '#D4956B'
            } as React.CSSProperties
          }>
          <Header variant="home" className="bg-transparent" />
        </div>
        <div className="relative min-h-[calc(100dvh-3.25rem)] flex-1 w-full overflow-hidden">
        <Photo
          src="/images/nz-ridge"
          alt="Kyle on a mountain ridge with snow-capped peaks in the distance"
          width={1600}
          height={900}
          eager
          className="absolute inset-0 h-full w-full object-cover object-[22%_bottom] md:object-[32%_bottom] origin-bottom z-[4] pointer-events-none"
        />
        <div className="pointer-events-none absolute inset-0 z-[8] flex flex-col items-center justify-start px-6 pt-[35vh] sm:pt-[38vh] saturate-[1.1] md:items-end md:justify-center md:px-16 md:pt-0 lg:px-24">
          <h1 className="absolute left-[270px] font-heading whitespace-nowrap tracking-wide text-center md:text-right text-[34px] sm:text-[50px] md:text-[72px] lg:text-[70px] font-[600] text-[#F2F4F6] md:mr-8 lg:mr-16 md:mt-20 md:mb-0">
            Get out and build
          </h1>
        </div>
        </div>
      </div>
      <div className="relative min-h-screen">
        <motion.div
          className="fixed inset-0 z-[-2] pointer-events-none"
          style={{
            backgroundColor: pageBgColor
          }} />

        <motion.div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: `
            radial-gradient(ellipse 70% 50% at 0% 100%, rgba(196, 160, 48, 0.60) 0%, transparent 60%),
            radial-gradient(ellipse 45% 35% at 10% 90%, rgba(210, 175, 60, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse 55% 25% at 5% 100%, rgba(230, 195, 80, 0.20) 0%, transparent 50%)
          `
          }} />

        <main id="main-content" className="flex flex-col items-center w-full">
          <div className="relative z-10 w-full shrink-0">
            <TickerBanner />
          </div>

          {/* Case studies */}
        <section
          aria-label="Case studies"
          className="relative w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 pt-32">
          
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 lg:gap-8 mb-6 lg:mb-8">
            {caseStudies.slice(0, 2).map((study, i) =>
            <motion.div
              key={study.title}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: i * 0.15
              }}
              className="w-full h-full">
              
                <CaseStudyCard
                title={study.title}
                description={study.description}
                href={study.href}
                glowColor={study.glowColor}
                logoUrl={study.logoUrl}
                logoAlt={study.logoAlt} />
              
              </motion.div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.slice(2).map((study, i) =>
            <motion.div
              key={study.title}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: (i + 2) * 0.15
              }}
              className="w-full h-full">
              
                <CaseStudyCard
                title={study.title}
                description={study.description}
                href={study.href}
                glowColor={study.glowColor}
                logoUrl={study.logoUrl}
                logoAlt={study.logoAlt} />
              
              </motion.div>
            )}
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-left pt-32 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-sans font-black text-[#F5E6D3] text-glow-soft mb-8 tracking-wide uppercase">
                About me
              </h2>
              <div className="text-lg md:text-xl text-[#F5E6D3]/90 leading-relaxed space-y-6">
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
            <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden border border-[#D4956B]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_30px_rgba(0,0,0,0.1)]">
                <img
                  src="/IMG_4050.jpg"
                  alt="Portrait of Kyle in the mountains"
                  className="w-full h-full min-w-full min-h-full object-cover duotone-filter"
                  loading="lazy" />
                
              </div>
            </div>
          </div>
        </section>
        </main>
        <Footer variant="home" />
      </div>
    </>
  );

}
