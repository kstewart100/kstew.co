import React from 'react';
export interface CaseStudyLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
  caption?: React.ReactNode;
  className?: string;
  'data-id'?: string;
}
/** Sections use outer space-y-12 / lg:space-y-16 between blocks. Use {@link caseStudyH2ClassName} on section h2s so the gap before the next paragraph or figure is always 24px (when h2 and content share one layout, or when heading + image are grouped—avoid a separate heading-only row before an image). */
export const caseStudyH2ClassName =
  'font-heading text-[#1a1a1a] text-xl md:text-2xl lg:text-[28px] font-normal leading-snug lg:leading-[40px] tracking-[1.2px] mb-6';

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  maxWidth = '734px',
  caption,
  className = '',
  'data-id': dataId
}) => {
  return (
    <div className="w-full max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10 relative" data-id={dataId}>
      <div className="mx-auto" style={{ maxWidth }}>
        <div className={`w-full text-left ${className}`}>{children}</div>
        {caption && (
          <div className="mt-4 w-full">
            {typeof caption === 'string' ? (
              <p className="font-sans text-xs text-gray-600 leading-relaxed text-left">
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
