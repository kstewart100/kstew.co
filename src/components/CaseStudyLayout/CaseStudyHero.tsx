import React from 'react';

export type CaseStudyHeroProps = {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  /** Soft navy elevation under the hero frame. */
  shadow?: boolean;
  className?: string;
};

/**
 * Breakout opening figure — wider than the 900px reading column so the
 * case study leads with the work, not the meta.
 */
export function CaseStudyHero({
  src,
  alt,
  caption,
  shadow = false,
  className = '',
}: CaseStudyHeroProps) {
  return (
    <figure
      className={`case-study-hero w-full mx-auto max-w-[1120px] px-4 sm:px-6 md:px-8 ${className}`.trim()}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className={`w-full max-w-full block h-auto rounded-media${
          shadow ? ' shadow-navy-sm' : ''
        }`}
      />
      {caption ? (
        <figcaption className="mt-3 max-w-[900px] mx-auto font-body italic text-xs text-color-text-caption leading-relaxed text-left">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
