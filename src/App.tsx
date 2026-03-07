import React, { lazy, Component } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ExpertScheduling } from './pages/ExpertScheduling';
import { ConversionGoalUpdates } from './pages/ConversionGoalUpdates';
import { FlexibleLiftConfidence } from './pages/FlexibleLiftConfidence';
import { MeasurementSetup } from './pages/MeasurementSetup';
// --- Components ---
export function CaseStudyCard({
  title,
  description,
  href,
  borderColor,
  glowColor,
  logoUrl,
  className








}: {title: string;description: string;href: string;borderColor: string;glowColor: string;logoUrl?: string;className?: string;}) {
  return (
    <Link
      to={href}
      className={`block rounded-2xl relative group cursor-pointer bg-[#0B3D4A]/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 ${className}`}
      style={{
        border: `1px solid ${borderColor}`,
        boxShadow: `0 8px 32px ${glowColor}`
      }}>

      <div className="flex flex-col justify-end h-full min-h-[280px] md:min-h-[300px] p-6 md:p-8">
        <div>
          {logoUrl &&
          <div className="h-8 md:h-9 w-[100px] md:w-[110px] mb-4">
              <img
              src={logoUrl}
              alt=""
              className="h-full w-full object-contain object-left opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            </div>
          }
          <h3 className="text-2xl md:text-3xl font-['DM_Sans'] font-bold text-[#F5E6D3] mb-3 group-hover:text-[#D4956B] transition-colors">
            {title}
          </h3>
          <p className="text-[#F5E6D3]/80 text-lg line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>);

}
const caseStudies = [
{
  title: 'Expert scheduling',
  description: "Simplified scheduling for Intuit's tax experts.",
  href: '/expert-scheduling',
  borderColor: 'rgba(212,149,107,0.3)',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/Intuit_idITTG9Sz3_0.svg"

},
{
  title: 'Conversion goal updates',
  description: 'Guided Google Ads users through updates with clarity.',
  href: '/conversion-goal-updates',
  borderColor: 'rgba(212,149,107,0.3)',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png"

},
{
  title: 'Flexible lift confidence',
  description:
  'Made results clearer and actionable for Google Ads lift users',
  href: '/flexible-lift-confidence',
  borderColor: 'rgba(212,149,107,0.3)',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png"

},
{
  title: 'Measurement setup',
  description: 'Made measurement accessible for all Google Ads users',
  href: '/measurement-setup',
  borderColor: 'rgba(212,149,107,0.3)',
  glowColor: 'rgba(212,149,107,0.15)',
  logoUrl: "/google-white-logo-6_3.png"

}];

function Home() {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 40,
    damping: 25,
    mass: 1
  });
  // Parallax Logic
  const bgY = useTransform(smoothScrollY, [0, 1000], [0, 300]);
  const textY = useTransform(smoothScrollY, [0, 500], [0, 250]);
  const midY = useTransform(smoothScrollY, [0, 500], [0, 80]);
  // Mountain Edge Glow
  const glowColor = useTransform(
    smoothScrollY,
    [0, 500, 1000],
    [
    'rgba(212, 149, 107, 0.4)',
    'rgba(26, 107, 122, 0.5)',
    'rgba(11, 61, 74, 0.3)']

  );
  const glowIntensity = useTransform(smoothScrollY, [0, 400, 800], [2, 12, 4]);
  const mountainFilter = useTransform(
    [glowIntensity, glowColor],
    ([intensity, color]) =>
    `drop-shadow(0 -${intensity}px ${(intensity as number) * 2}px ${color})`
  );
  // Page background
  const pageBgColor = useTransform(
    smoothScrollY,
    [0, 500, 1000, 1500],
    ['#2C7A9B', '#1A6B7A', '#082f3a', '#051923']
  );
  return (
    <>
      <div className="relative min-h-screen">
        {/* Fixed Page Background */}
        <motion.div
          className="fixed inset-0 z-[-2] pointer-events-none"
          style={{
            backgroundColor: pageBgColor
          }} />

        <div
          className="absolute top-0 left-0 w-full z-[20]"
          style={
          {
            '--color-text-primary': '#F5E6D3',
            '--color-bg-canvas': 'transparent',
            '--color-interactive-primary': '#D4956B'
          } as React.CSSProperties
          }>

          <Header variant="home" className="bg-transparent" />
        </div>
        <main className="flex flex-col items-center w-full">
          {/* Hero Section */}
          <div className="h-[100vh] w-full relative flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full saturate-[1.1]">
              {/* Gradient Background */}
              <motion.div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                  background:
                  'linear-gradient(to bottom, #0B3D4A 0%, #1A6B7A 40%, #D4956B 75%, #F5C6A0 100%)',
                  y: scrollY
                }} />

              {/* Distant Mountains */}
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693a141f6bc8c3f802fd59da_b11da6f47a0d769d9e44268a8953a403_Untitled-12-Full%20page.png"
                alt="Distant Mountains"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.1] origin-bottom z-[2]"
                fetchpriority="high"
                style={{
                  y: bgY,
                  filter: mountainFilter
                }} />

              {/* Title */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center pt-[15vh] md:pt-[20vh] z-[3]"
                style={{
                  y: textY
                }}>

                <h1 className="font-['DM_Sans'] font-black text-[64px] md:text-[100px] lg:text-[140px] leading-[0.9] uppercase tracking-wide text-white text-center text-glow-peach px-4">
                  Get out / Build
                </h1>
              </motion.div>
              {/* Midground Ridgeline */}
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693a1431094861a9c8fd6f13_db97f5c004372ba6c9cb380849abf6b8_Untitled-14-Full%20page.png"
                alt="Midground Ridgeline"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.1] origin-bottom z-[4] pointer-events-none"
                fetchpriority="high"
                style={{
                  y: midY,
                  filter: mountainFilter
                }} />

              {/* Foreground Mountain Layers */}
              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4b64d028993f587d9130_Hero%20Image%20Portfolio-5-1%20foreground%20-%20Mountain%20side.png"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[5] pointer-events-none"
                fetchpriority="high"
                style={{
                  filter: mountainFilter
                }} />

              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4bcf3a27b41a3f8990fb_Hero%20Image%20Portfolio-6-1%20foreground%20-%20Mountain%20side.png"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[6] pointer-events-none"
                fetchpriority="high"
                style={{
                  filter: mountainFilter
                }} />

              <motion.img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693b4be4687cb650578097d7_Hero%20Image%20Portfolio-7-Full%20page.png"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom z-[7] pointer-events-none"
                fetchpriority="high"
                style={{
                  filter: mountainFilter
                }} />

              {/* Atmosphere layer */}
              <img
                src="https://cdn.prod.website-files.com/69385de55f4c37471e7068d4/693a146552b85d1245ae4b94_9c5e50a4f4a8a0701551dce0a593df5a_Untitled-2.png"
                className="absolute inset-0 w-full h-full object-cover object-[30%_center] md:object-center scale-[1.05] origin-bottom mix-blend-screen opacity-30 z-[8] pointer-events-none"
                fetchPriority="high"
                alt="Atmosphere" />

            </div>
          </div>
          {/* Project Cards Grid Section */}
          <div className="relative w-full lg:w-[1024px] mx-auto px-6 md:px-8 lg:px-0 py-[60px] pt-[40px] pb-[40px] mt-[40px] mb-[40px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] relative z-10 items-start justify-items-start text-left">
              {caseStudies.map((study, i) =>
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
                  borderColor={study.borderColor}
                  glowColor={study.glowColor}
                  logoUrl={study.logoUrl}
                  className="w-full h-full max-w-none" />

                </motion.div>
              )}
            </div>
          </div>
          {/* About Section */}
          <section
            id="about"
            className="w-full max-w-[1024px] mx-auto px-6 md:px-8 lg:px-0 text-left py-20 relative z-10 pt-[40px] pb-[40px] space-y-[40px]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-['DM_Sans'] font-black text-[#F5E6D3] text-glow-peach mb-8 tracking-wide uppercase">
                  About me
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-[#F5E6D3]/90 leading-relaxed">
                  <p>
                    I'm a Bay Area native and content designer with 10+ years
                    building user experiences across startups, agencies, and
                    companies like Google and Intuit. Above all else, I love
                    creating and collaborating. Design is a team sport, and the
                    best work happens when you're partnering closely with
                    others.
                  </p>
                  <p>
                    These days I'm in the Inner Sunset, running Golden Gate
                    Park, cycling Marin's hills, and planning my next
                    backpacking trip. I recently spent several months in New
                    Zealand, which was a good reminder that sometimes you need
                    to step away to see clearly.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-[20px] overflow-hidden border border-[#D4956B]/30 shadow-glass">
                  <img
                    src="/IMG_4050.jpg"
                    alt="Portrait of Kyle in the mountains"
                    className="w-full h-full object-cover duotone-filter"
                    loading="lazy" />

                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer variant="home" />
      </div>
    </>);

}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expert-scheduling" element={<ExpertScheduling />} />
      <Route
        path="/conversion-goal-updates"
        element={<ConversionGoalUpdates />} />

      <Route
        path="/flexible-lift-confidence"
        element={<FlexibleLiftConfidence />} />

      <Route path="/measurement-setup" element={<MeasurementSetup />} />
    </Routes>);

}