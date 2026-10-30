import React from 'react';

type MatrixParagraph = {
  label?: string;
  text: string;
};

type MatrixRow = {
  criterion: string;
  cells: MatrixParagraph[][];
};

const COLUMNS = [
  'Certainty of Lift Detection',
  'Lift Confidence',
  'Statistical Significance',
  'P-Value',
];

const ROWS: MatrixRow[] = [
  {
    criterion: 'Voice & Tone Match',
    cells: [
      [
        {
          label: 'Strong Match',
          text: '- Uses accessible language that connects with user confidence levels. Clearly communicates what the metric represents. Straightforward terminology without jargon.',
        },
      ],
      [
        {
          label: 'Good Match',
          text: '- "Confidence" is relatable and emotional. Concise and action-oriented. Simple construction, easy to scan.',
        },
      ],
      [
        {
          label: 'Weak Match',
          text: '- Technical jargon creates distance between user and tool. Accurate but intimidating for non-statisticians. Unclear to many brand marketers.',
        },
      ],
      [
        {
          label: 'Poor Match',
          text: '- Highly technical, creates user anxiety. Only helpful to those with statistical training. Completely unclear to general marketers.',
        },
      ],
    ],
  },
  {
    criterion: 'SWOT Analysis',
    cells: [
      [
        {
          label: 'S:',
          text: 'Intuitive meaning, confidence-building language, explains concept and measurement',
        },
        {
          label: 'W:',
          text: 'Slightly longer, may seem redundant',
        },
        {
          label: 'O:',
          text: 'Signature differentiating term',
        },
        {
          label: 'T:',
          text: 'Competitors might adopt similar approach',
        },
      ],
      [
        {
          label: 'S:',
          text: 'Concise, implies reliability, familiar marketing term. Meta and other platforms use this term.',
        },
        {
          label: 'W:',
          text: 'Could confuse with confidence intervals, ambiguous',
        },
        {
          label: 'O:',
          text: 'Mobile-friendly, memorable',
        },
        {
          label: 'T:',
          text: 'Generic, unclear without context',
        },
      ],
      [
        {
          label: 'S:',
          text: 'Technically precise, research standard, conveys rigor',
        },
        {
          label: 'W:',
          text: 'Intimidating jargon, binary implication, excludes users',
        },
        {
          label: 'O:',
          text: 'Positions as scientifically rigorous',
        },
        {
          label: 'T:',
          text: 'Reduces engagement, adoption barriers',
        },
      ],
      [
        {
          label: 'S:',
          text: 'Extremely precise, standard measure, compact',
        },
        {
          label: 'W:',
          text: 'Excludes majority users, needs explanation',
        },
        {
          label: 'O:',
          text: 'Appeals to data scientists',
        },
        {
          label: 'T:',
          text: 'Major adoption barrier, reduces accessibility',
        },
      ],
    ],
  },
  {
    criterion: 'Company Research Relevance',
    cells: [
      [
        {
          text: 'High - Aligns with user research showing preference for explanatory language over statistical terms. Matches UX principle of progressive disclosure.',
        },
      ],
      [
        {
          text: 'Medium - Balances brevity with meaning. May need contextual support based on user testing data.',
        },
      ],
      [
        {
          text: 'Low - User research indicates statistical terms create hesitation and reduce confidence in decision-making.',
        },
      ],
      [
        {
          text: 'Very Low - Testing shows abbreviations without context cause user drop-off and support tickets.',
        },
      ],
    ],
  },
  {
    criterion: 'Plain Language Assessment',
    cells: [
      [
        {
          label: 'Excellent',
          text: '- 8th grade reading level. Uses everyday words brand marketers understand. Explains the "why" behind the metric.',
        },
      ],
      [
        {
          label: 'Good',
          text: '- 6th grade reading level. Both words are familiar to marketers. It may need a tooltip explanation.',
        },
      ],
      [
        {
          label: 'Poor',
          text: '- College+ reading level. Requires statistical knowledge. May cause decision paralysis.',
        },
      ],
      [
        {
          label: 'Very Poor',
          text: '- Graduate-level statistical knowledge required. Abbreviation provides no context clues. Needs extensive explanation.',
        },
      ],
    ],
  },
];

const TITLE = 'Brand lift naming analysis matrix';

const fieldLabelClassName = 'text-sm font-bold text-color-text-primary mb-1';
const cardClassName =
  'border border-color-border-default bg-color-bg-surface p-4 space-y-3';
const tableHeadingClassName =
  'text-left align-top font-heading font-semibold text-color-text-primary text-[12px] lg:text-[13px] xl:text-[14px] leading-[1.5] pr-3 xl:pr-4 pb-7';
const tableCellClassName =
  'align-top font-body text-color-text-body text-[12px] lg:text-[13px] xl:text-[15px] leading-[1.6] pr-3 xl:pr-4 pb-7';

function CellParagraph({
  paragraph,
  compact,
}: {
  paragraph: MatrixParagraph;
  compact?: boolean;
}) {
  const { label, text } = paragraph;
  return (
    <p
      className={
        compact
          ? 'font-body text-color-text-body text-[12px] lg:text-[13px] xl:text-[15px] leading-[1.6]'
          : 'font-body text-color-text-body text-[16px] leading-[1.5]'
      }
    >
      {label ? <strong className="font-bold">{label} </strong> : null}
      {text}
    </p>
  );
}

function CellContent({
  paragraphs,
  compact,
}: {
  paragraphs: MatrixParagraph[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? 'space-y-4 xl:space-y-5' : 'space-y-3'}>
      {paragraphs.map((paragraph, index) => (
        <CellParagraph key={index} paragraph={paragraph} compact={compact} />
      ))}
    </div>
  );
}

function MatrixTable() {
  return (
    <table className="mt-8 w-full border-collapse table-fixed">
      <caption className="sr-only">
        Comparison of four brand lift metric names across four criteria
      </caption>
      <colgroup>
        <col className="w-[12%]" />
        <col className="w-[22%]" />
        <col className="w-[21%]" />
        <col className="w-[21%]" />
        <col className="w-[24%]" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" className="sr-only">
            Criterion
          </th>
          {COLUMNS.map((column) => (
            <th key={column} scope="col" className={tableHeadingClassName}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.criterion}>
            <th scope="row" className={tableHeadingClassName}>
              {row.criterion}
            </th>
            {row.cells.map((cell, index) => (
              <td key={COLUMNS[index]} className={tableCellClassName}>
                <CellContent paragraphs={cell} compact />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function FlexibleLiftNamingMatrix() {
  return (
    <div className="my-5 first:mt-0 last:mb-0">
      <h3 className="font-heading font-semibold text-color-text-primary text-[22.5px] leading-[1.2] tracking-[-0.01em] md:hidden">
        {TITLE}
      </h3>

      <div className="space-y-4 md:hidden mt-4">
        {ROWS.map((row) => (
          <article key={row.criterion} className={cardClassName}>
            <p className="font-heading font-semibold text-color-text-primary">
              {row.criterion}
            </p>
            {row.cells.map((cell, index) => (
              <div key={COLUMNS[index]}>
                <p className={fieldLabelClassName}>{COLUMNS[index]}</p>
                <CellContent paragraphs={cell} />
              </div>
            ))}
          </article>
        ))}
      </div>

      <figure className="hidden md:block w-full">
        <div className="border border-color-border-default bg-color-bg-subtle">
          <div className="p-3 sm:p-6 md:p-8">
            <div className="bg-color-bg-surface border border-color-border-default shadow-neutral-tight">
              <div className="px-6 py-8 lg:px-8 lg:py-10 text-color-text-primary">
                <h3 className="font-heading font-semibold text-2xl lg:text-[30px] leading-tight tracking-tight">
                  {TITLE}
                </h3>
                <MatrixTable />
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
