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

/** Notion-style tokens (fonts unchanged: Be Vietnam Pro + Inconsolata). */
export const documentCaseStudyTitleClassName =
  'font-heading text-color-text-notion text-[2rem] sm:text-[2.5rem] font-bold leading-[1.2] tracking-[-0.01em]';

export const documentCaseStudyBodyClassName =
  'font-body text-color-text-notion text-base font-normal leading-normal';

export const documentCaseStudyH2ClassName =
  'font-heading text-color-text-notion text-2xl font-semibold leading-[1.2] tracking-[-0.01em]';

export const documentCaseStudyH3ClassName =
  'font-heading text-color-text-notion text-xl font-semibold leading-[1.2] tracking-[-0.01em]';

export const documentCaseStudyImageClassName =
  'w-full max-w-full block h-auto my-5 first:mt-0 last:mb-0';

export const documentCaseStudyImageShadowClassName =
  `${documentCaseStudyImageClassName} shadow-navy-md`;

export const documentCaseStudyListClassName =
  'font-body text-color-text-notion text-base font-normal leading-normal list-disc pl-6 space-y-1';

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
          ? 'max-w-[900px] px-8 md:px-8 lg:px-10'
          : 'max-w-[1024px] px-5 md:px-8 lg:px-10'
      }`}
      data-id={dataId}
    >
      <div className="mx-auto" style={{ maxWidth: innerMaxWidth }}>
        <div className={`w-full text-left ${className}`}>{children}</div>
        {caption && (
          <div className="mt-4 w-full">
            {typeof caption === 'string' ? (
              <p className="font-body text-xs text-gray-600 leading-relaxed text-left">
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
