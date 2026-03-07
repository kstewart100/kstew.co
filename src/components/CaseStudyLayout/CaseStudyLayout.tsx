import React from 'react';
export interface CaseStudyLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
  caption?: React.ReactNode;
  className?: string;
  'data-id'?: string;
}
export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  children,
  maxWidth = '650px',
  caption,
  className = '',
  'data-id': dataId
}) => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 relative" data-id={dataId}>
      <div
        className="mx-auto relative"
        style={{
          maxWidth
        }}>

        {/* Main Content: Always left-aligned within the 650px max-width container */}
        <div className={`w-full text-left ${className}`}>{children}</div>

        {/* Caption:
             Mobile/Tablet: Stacked below content
             Desktop (lg+): Positioned absolutely to the right of the 650px container
             to ensure it doesn't "push" the main content off-center.
          */}
        {caption &&
        <div className="mt-4 lg:mt-0 lg:absolute lg:left-full lg:top-0 lg:ml-12 lg:w-64">
            <p className="font-body text-sm text-color-text-secondary italic leading-relaxed text-left">
              {caption}
            </p>
          </div>
        }
      </div>
    </div>);

};