import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExpertScheduling } from './pages/ExpertScheduling';
import { ConversionGoalUpdates } from './pages/ConversionGoalUpdates';
import { FlexibleLiftConfidence } from './pages/FlexibleLiftConfidence';
import { MeasurementSetup } from './pages/MeasurementSetup';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expert-scheduling" element={<ExpertScheduling />} />
      <Route path="/conversion-goal-updates" element={<ConversionGoalUpdates />} />
      <Route path="/flexible-lift-confidence" element={<FlexibleLiftConfidence />} />
      <Route path="/measurement-setup" element={<MeasurementSetup />} />
    </Routes>
  );
}
