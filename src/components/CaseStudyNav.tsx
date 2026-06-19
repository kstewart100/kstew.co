import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  getCaseStudyByPath,
  getNextCaseStudy,
} from '../data/caseStudies';
import { CaseStudyLayout, documentCaseStudyH2ClassName } from './CaseStudyLayout';
import { WorkCard } from './WorkCard';

export function CaseStudyNav() {
  const { pathname } = useLocation();
  const current = getCaseStudyByPath(pathname);

  if (!current) {
    return null;
  }

  const next = getNextCaseStudy(current.slug);

  return (
    <CaseStudyLayout variant="document">
      <section
        aria-labelledby="case-study-nav-heading"
        className="border-t border-color-border-notion pt-8 md:pt-10"
      >
        <h2 id="case-study-nav-heading" className={`${documentCaseStudyH2ClassName} mb-6`}>
          Keep exploring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <WorkCard
            label={next.label}
            title={next.title}
            href={`/${next.slug}`}
          />
          <WorkCard label="Home" title="All case studies" href="/" />
        </div>
      </section>
    </CaseStudyLayout>
  );
}
