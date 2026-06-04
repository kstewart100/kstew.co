import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExpertScheduling } from './pages/ExpertScheduling';
import { ConversionGoalUpdates } from './pages/ConversionGoalUpdates';
import { FlexibleLiftConfidence } from './pages/FlexibleLiftConfidence';
import { MeasurementSetup } from './pages/MeasurementSetup';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expert-scheduling" element={<ExpertScheduling />} />
      <Route path="/conversion-goal-updates" element={<ConversionGoalUpdates />} />
      <Route path="/flexible-lift-confidence" element={<FlexibleLiftConfidence />} />
      <Route path="/measurement-setup" element={<MeasurementSetup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
