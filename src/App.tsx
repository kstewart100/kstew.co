import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { PageMeta } from './components/PageMeta';
import {
  DEFAULT_PAGE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  absoluteUrl,
  getCaseStudyByPath,
} from './data/caseStudies';
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

function RoutePreviewMeta() {
  const { pathname } = useLocation();
  const caseStudy = getCaseStudyByPath(pathname);

  if (caseStudy) {
    return (
      <PageMeta
        title={caseStudy.pageTitle}
        description={caseStudy.description}
        url={`${SITE_URL}/${caseStudy.slug}`}
        image={absoluteUrl(caseStudy.previewImage)}
      />
    );
  }

  if (pathname === '/') {
    return (
      <PageMeta
        title={DEFAULT_PAGE_TITLE}
        description={SITE_DESCRIPTION}
        url={`${SITE_URL}/`}
        image={absoluteUrl('/og-image.png')}
      />
    );
  }

  return (
    <PageMeta
      title={`Page not found — Kyle Stewart`}
      description={SITE_DESCRIPTION}
      url={`${SITE_URL}${pathname}`}
      image={absoluteUrl('/og-image.png')}
    />
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <RoutePreviewMeta />
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
