import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen() {
  const [loadingText, setLoadingText] = useState('Surveying the landscape...');

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingText('Navigating the noise...'), 1600);
    const timer2 = setTimeout(() => setLoadingText('Discovering the path.'), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2B6788] text-[#F5E6D3]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="flex flex-col items-center z-10 w-full px-6"
      >
        <div className="h-8 mt-4 mb-10 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={loadingText}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              className="font-['DM_Sans'] text-sm md:text-base font-medium tracking-wide text-[#F5E6D3] text-glow-soft text-center"
            >
              {loadingText}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="relative w-[200px] md:w-[240px] h-[2px] bg-white/10 rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#F5E6D3] rounded-full box-glow-soft"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
