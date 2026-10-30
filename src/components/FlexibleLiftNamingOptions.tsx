import React from 'react';

type MetricSegment = {
  text: string;
  underline?: boolean;
  bold?: boolean;
};

const NAMING_OPTIONS: { id: string; metric: MetricSegment[] }[] = [
  {
    id: 'certainty',
    metric: [
      { text: 'Certainty of lift detection', underline: true },
      { text: ' ≥90%' },
    ],
  },
  {
    id: 'confidence',
    metric: [{ text: 'Lift confidence: ' }, { text: 'high', bold: true }],
  },
  {
    id: 'significance',
    metric: [
      { text: 'Statistical significance ', underline: true },
      { text: '≥90%' },
    ],
  },
  {
    id: 'p-value',
    metric: [{ text: 'p-value: 0.05', underline: true }],
  },
];

export function FlexibleLiftNamingOptions() {
  return (
    <div
      className="my-5 grid grid-cols-1 gap-8 first:mt-0 last:mb-0 md:grid-cols-2 md:gap-x-10 md:gap-y-12"
      aria-label="Naming options from cross-functional collaboration"
    >
      {NAMING_OPTIONS.map((option) => (
        <article
          key={option.id}
          className="rounded-2xl bg-color-bg-surface px-6 py-8 font-[Roboto,Helvetica,Arial,sans-serif] text-[#1f1f1f] shadow-[0_2px_4px_rgba(0,0,0,0.25),0_0_1px_rgba(0,0,0,0.08)] sm:px-8"
        >
          <p className="text-[24px] font-normal leading-8 tracking-[-0.005em] sm:text-[29px] sm:leading-10">
            Your campaigns drove an increase in awareness
          </p>
          <p className="mt-5 text-sm leading-5 tracking-[0.01em]">
            {option.metric.map((segment, i) => (
              <span
                key={i}
                className={[
                  'whitespace-pre-wrap',
                  segment.underline ? 'underline underline-offset-2' : '',
                  segment.bold ? 'font-bold' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {segment.text}
              </span>
            ))}
          </p>
        </article>
      ))}
    </div>
  );
}
