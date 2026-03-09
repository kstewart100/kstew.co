import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Gradient scroll — sky blue → navy (from gradient-scroll demo)
const BG_STOPS = [
  { pct: 0, hex: '#5AAEE8' },
  { pct: 0.7, hex: '#1F4470' },
  { pct: 0.85, hex: '#0F2440' },
  { pct: 1, hex: '#294050' },
];

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function lerpColor(a: string, b: string, t: number): string {
  const ra = hexToRgb(a),
    rb = hexToRgb(b);
  return `rgb(${Math.round(ra[0] + (rb[0] - ra[0]) * t)}, ${Math.round(ra[1] + (rb[1] - ra[1]) * t)}, ${Math.round(ra[2] + (rb[2] - ra[2]) * t)})`;
}

function getScrollBackgroundColor(progress: number): string {
  const p = Math.min(progress, 1);
  for (let i = 0; i < BG_STOPS.length - 1; i++) {
    const s = BG_STOPS[i],
      e = BG_STOPS[i + 1];
    if (p >= s.pct && p <= e.pct) {
      return lerpColor(s.hex, e.hex, (p - s.pct) / (e.pct - s.pct));
    }
  }
  return BG_STOPS[BG_STOPS.length - 1].hex;
}

export function CaseStudyCard({
  title,
  description,
  href,
  borderColor,
  glowColor,
  logoUrl,
  className,
}: {
  title: string;
  description: string;
  href: string;
  borderColor: string;
  glowColor: string;
  logoUrl?: string;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={`block rounded-2xl relative group cursor-pointer bg-[#0B3D4A]/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${className}`}
      style={{
        border: `1px solid ${borderColor}`,
        boxShadow: `0 8px 32px ${glowColor}`,
      }}
    >
      <div className="flex flex-col justify-end h-full min-h-[280px] md:min-h-[300px] p-6 md:p-8">
        <div>
          {logoUrl && (
            <div className="h-8 md:h-9 w-[100px] md:w-[110px] mb-4">
              <img
                src={logoUrl}
                alt=""
                className="h-full w-full object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          )}
          <h3 className="text-2xl md:text-3xl font-['DM_Sans'] font-bold text-[#F5E6D3] mb-3 group-hover:text-[#D4956B] transition-colors">
            {title}
          </h3>
          <p className="text-[#F5E6D3]/80 text-lg line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}

const caseStudies = [
  {
    title: 'Expert scheduling',
    description: "Simplified scheduling for Intuit's tax experts.",
    href: '/expert-scheduling',
    borderColor: 'rgba(212,149,107,0.3)',
    glowColor: 'rgba(212,149,107,0.15)',
    logoUrl: 'https://cdn.magicpatterns.com/uploads/peo6NBjQ4gNzPTgFEZt5Ua/Intuit_idITTG9Sz3_0.svg',
  },
  {
    title: 'Conversion goal updates',
    description: 'Guided Google Ads users through updates with clarity.',
    href: '/conversion-goal-updates',
    borderColor: 'rgba(212,149,107,0.3)',
    glowColor: 'rgba(212,149,107,0.15)',
    logoUrl: 'https://cdn.magicpatterns.com/uploads/doW1gcBdghq2cR5qSqUBG2/google-white-logo-6_3.png',
  },
  {
    title: 'Flexible lift confidence',
    description: 'Made results clearer and actionable for Google Ads lift users.',
    href: '/flexible-lift-confidence',
    borderColor: 'rgba(212,149,107,0.3)',
    glowColor: 'rgba(212,149,107,0.15)',
    logoUrl: 'https://cdn.magicpatterns.com/uploads/doW1gcBdghq2cR5qSqUBG2/google-white-logo-6_3.png',
  },
  {
    title: 'Measurement setup',
    description: 'Made measurement accessible for all Google Ads users.',
    href: '/measurement-setup',
    borderColor: 'rgba(212,149,107,0.3)',
    glowColor: 'rgba(212,149,107,0.15)',
    logoUrl: 'https://cdn.magicpatterns.com/uploads/doW1gcBdghq2cR5qSqUBG2/google-white-logo-6_3.png',
  },
];

export function Home() {
  const { scrollY, scrollYProgress } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 40,
    damping: 25,
    mass: 1,
  });
  const textY = useTransform(smoothScrollY, [0, 500], [0, 250]);
  const midY = useTransform(smoothScrollY, [0, 500], [0, 80]);
  const glowColor = useTransform(
    smoothScrollY,
    [0, 500, 1000],
    [
      'rgba(212, 149, 107, 0.4)',
      'rgba(26, 107, 122, 0.5)',
      'rgba(11, 61, 74, 0.3)',
    ]
  );
  const glowIntensity = useTransform(smoothScrollY, [0, 400, 800], [2, 12, 4]);
  const mountainFilter = useTransform(
    [glowIntensity, glowColor],
    ([intensity, color]) =>
      `drop-shadow(0 -${intensity}px ${(intensity as number) * 2}px ${color})`
  );
  // Gradient scroll: sky blue → navy (stays above the fold)
  const pageBgColor = useTransform(scrollYProgress, getScrollBackgroundColor);
  // Golden hour glow fades over first 25% of scroll
  const glowOpacity = useTransform(
    scrollYProgress,
    (p) => Math.max(0, 1 - p / 0.25)
  );

  return (
    <>
      <div className="relative min-h-screen">
        <motion.div
          className="fixed inset-0 z-[-2] pointer-events-none"
          style={{ backgroundColor: pageBgColor }}
        />
        {/* Golden hour glow — bottom left, fades on scroll */}
        <motion.div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: `
              radial-gradient(ellipse 70% 50% at 0% 100%, rgba(196, 160, 48, 0.60) 0%, transparent 60%),
              radial-gradient(ellipse 45% 35% at 10% 90%, rgba(210, 175, 60, 0.35) 0%, transparent 55%),
              radial-gradient(ellipse 55% 25% at 5% 100%, rgba(230, 195, 80, 0.20) 0%, transparent 50%)
            `,
          }}
        />

        <div
          className="absolute top-0 left-0 w-full z-[20]"
          style={
            {
              '--color-text-primary': '#F5E6D3',
              '--color-bg-canvas': 'transparent',
              '--color-interactive-primary': '#D4956B',
            } as React.CSSProperties
          }
        >
          <Header variant="home" className="bg-transparent" />
        </div>

        <main className="flex flex-col items-center w-full">
          {/* Hero Section */}
          <div className="h-[100vh] w-full relative flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full saturate-[1.1]">
              <motion.div
                className="absolute inset-0 w-full h-full z-0"
                style={{ background: 'transparent', y: scrollY }}
              />
              <motion.div
                className="absolute inset-0 flex flex-col items-center pt-[15vh] md:pt-[20vh] z-[3]"
                style={{ y: textY }}
              >
                <h1 className="font-['DM_Sans'] font-black text-[64px] md:text-[100px] lg:text-[140px] leading-[0.9] uppercase tracking-wide text-white text-center text-glow-soft px-4">
                  Get out / Build
                </h1>
              </motion.div>
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693a1431094861a9c8fd6f13_db97f5c004372ba6c9cb380849abf6b8_Untitled-14-Full%20page.png"
                alt="Midground Ridgeline"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.1] origin-bottom z-[4] pointer-events-none"
                fetchPriority="high"
                style={{ y: midY, filter: mountainFilter }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4b64d028993f587d9130_Hero%20Image%20Portfolio-5-1%20foreground%20-%20Mountain%20side.png"
                alt="Foreground mountains"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[5] pointer-events-none"
                fetchPriority="high"
                style={{ filter: mountainFilter }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4bcf3a27b41a3f8990fb_Hero%20Image%20Portfolio-6-1%20foreground%20-%20Mountain%20side.png"
                alt="Foreground mountains"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[6] pointer-events-none"
                fetchPriority="high"
                style={{ filter: mountainFilter }}
              />
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4be4687cb650578097d7_Hero%20Image%20Portfolio-7-Full%20page.png"
                alt="Foreground mountains"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[7] pointer-events-none"
                fetchPriority="high"
                style={{ filter: mountainFilter }}
              />
            </div>
          </div>

          {/* Project Cards Grid — section padding matches case study rhythm (py-12 lg:py-20) */}
          <section
            aria-label="Case studies"
            className="relative w-full max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10 py-12 lg:py-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10 items-start justify-items-start text-left">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: i * 0.15,
                  }}
                  className="w-full h-full"
                >
                  <CaseStudyCard
                    title={study.title}
                    description={study.description}
                    href={study.href}
                    borderColor={study.borderColor}
                    glowColor={study.glowColor}
                    logoUrl={study.logoUrl}
                    className="w-full h-full max-w-none"
                  />
                </motion.div>
              ))}
            </div>
          </section>

          {/* About Section — same horizontal padding and section rhythm as case studies */}
          <section
            id="about"
            className="w-full max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10 text-left py-12 lg:py-20 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-['DM_Sans'] font-black text-[#F5E6D3] text-glow-soft mb-8 tracking-wide uppercase">
                  About me
                </h2>
                <div className="text-lg md:text-xl text-[#F5E6D3]/90 leading-relaxed space-y-6">
                  <p>
                    I'm a Bay Area native and content designer with 10+ years
                    building user experiences across startups, agencies, and
                    companies like Google and Intuit. Above all else, I love
                    creating and collaborating. Design is a team sport, and the
                    best work happens when you're partnering closely with
                    others.
                  </p>
                  <p>
                    These days I'm in the Inner Sunset, running Golden Gate Park,
                    cycling Marin's hills, and planning my next backpacking trip.
                    I recently spent several months in New Zealand, which was a
                    good reminder that sometimes you need to step away to see
                    clearly.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden border border-[#D4956B]/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_30px_rgba(0,0,0,0.1)]">
                  <img
                    src="https://cdn.magicpatterns.com/uploads/1kTXKRcTKkkfzsyMm5zCn9/IMG_4050.jpg"
                    alt="Portrait of Kyle in the mountains"
                    className="w-full h-full object-cover duotone-filter"
                    loading="lazy"
                  />
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
