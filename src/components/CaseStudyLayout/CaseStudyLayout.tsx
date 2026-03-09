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
  maxWidth = '734px',
  caption,
  className = '',
  'data-id': dataId
}) => {
  return (
    <div className="w-full max-w-[1024px] mx-auto px-5 md:px-8 lg:px-10 relative" data-id={dataId}>
      <div className="mx-auto relative" style={{ maxWidth }}>
        <div className={`w-full text-left ${className}`}>{children}</div>
        {caption && (
          <div className="mt-4 lg:mt-0 lg:absolute lg:left-full lg:top-0 lg:ml-12 lg:w-64">
            {typeof caption === 'string' ? (
              <p className="font-mono text-xs text-gray-600 leading-relaxed text-left">
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