import React from 'react';

export interface CaseStudyLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
  caption?: React.ReactNode;
  className?: string;
  /** `document` matches Notion HTML export layout (900px column, generous mobile padding). */
  variant?: 'default' | 'document';
  'data-id'?: string;
}

/** Case study type styles (fonts: Hanken Grotesk + Inconsolata). */
/** Type ladder: 12 / 14 / 18 / 22 / 28 / 36 / 40 (+ hero clamp). */
export const documentCaseStudyTitleClassName =
  'font-heading text-color-text-primary text-[36px] sm:text-[40px] font-bold leading-[1.2] tracking-[-0.01em]';

export const documentCaseStudyBodyClassName =
  'font-body text-color-text-body text-[18px] font-normal leading-normal';

export const documentCaseStudyH2ClassName =
  'font-heading text-color-text-primary text-[28px] font-semibold leading-[1.2] tracking-[-0.01em]';

export const documentCaseStudyH3ClassName =
  'font-heading text-color-text-primary text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]';

/** Opening hero / full-bleed lead image — no frame border. */
export const documentCaseStudyImageHeroClassName =
  'w-full max-w-full block h-auto my-4 first:mt-0 last:mb-0 rounded-media';

/** In-content case study images — thin border for continuity across screenshots. */
export const documentCaseStudyImageClassName =
  `${documentCaseStudyImageHeroClassName} border border-color-border-default`;

export const documentCaseStudyImageShadowClassName =
  `${documentCaseStudyImageClassName} shadow-navy-sm`;

export const documentCaseStudyListClassName =
  'font-body text-color-text-body text-[18px] font-normal leading-normal list-disc pl-6 space-y-1';

/** Callout / aside: gap before tint edge, padding on 4/8 scale. */
export const documentCaseStudyAsideClassName =
  `${documentCaseStudyBodyClassName} mt-8 bg-color-bg-subtle px-4 py-4 rounded-surface`;

const DOCUMENT_CASE_STUDY_MAX_WIDTH = '900px';

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  maxWidth = '734px',
  caption,
  className = '',
  variant = 'default',
  'data-id': dataId,
}) => {
  const isDocument = variant === 'document';
  const innerMaxWidth = isDocument ? DOCUMENT_CASE_STUDY_MAX_WIDTH : maxWidth;

  return (
    <div
      className={`w-full mx-auto relative ${
        isDocument
          ? 'max-w-[900px] px-8 md:px-8 lg:px-8'
          : 'max-w-[1024px] px-4 md:px-8 lg:px-8'
      }`}
      data-id={dataId}
    >
      <div className="mx-auto" style={{ maxWidth: innerMaxWidth }}>
        <div className={`w-full text-left ${className}`}>{children}</div>
        {caption && (
          <div className="mt-4 w-full">
            {typeof caption === 'string' ? (
              <p className="font-body italic text-xs text-color-text-caption leading-relaxed text-left">
                {caption}
              </p>
            ) : (
              caption
            )}
          </div>
        )}
      </div>
    </div>
  );
};
