import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import { documentCaseStudyH3ClassName } from './CaseStudyLayout';

export type CopyDecisionRow = {
  copy: ReactNode;
  status: ReactNode;
  decision: string;
};

/** Shared type scale: labels lead, content supports. */
const labelClassName =
  'font-heading text-[18px] font-semibold leading-normal text-color-text-primary';

const contentClassName =
  'font-body text-[18px] font-normal leading-normal text-color-text-body';

const cellClassName =
  'text-left align-top p-4 border border-color-border-default min-w-[7.5rem] bg-color-bg-surface';

const headerClassName = `${labelClassName} text-left p-4 border border-color-border-default min-w-[7.5rem] bg-color-bg-subtle`;

/** Flat document chrome — same family as case-study asides, no card kit. */
const cardClassName =
  'border border-color-border-default bg-color-bg-surface overflow-hidden';

const cardSectionClassName = 'px-4 py-4';

const statusPillBaseClassName =
  'inline-flex items-center border px-2 py-0.5 font-heading text-[14px] font-normal leading-normal';

const statusPillToneClassName = {
  rejected:
    'bg-color-status-rejected-bg border-color-status-rejected-border text-color-status-rejected-text',
  final:
    'bg-color-status-final-bg border-color-status-final-border text-color-status-final-text',
} as const;

function statusText(status: ReactNode): string {
  if (typeof status === 'string' || typeof status === 'number') {
    return String(status);
  }

  if (isValidElement<{ children?: ReactNode }>(status)) {
    return Children.toArray(status.props.children)
      .map((child) => statusText(child))
      .join('')
      .trim();
  }

  return Children.toArray(status)
    .map((child) => statusText(child))
    .join('')
    .trim();
}

function StatusPill({ status }: { status: ReactNode }) {
  const label = statusText(status);
  const tone = /final/i.test(label) ? 'final' : 'rejected';

  return (
    <span className={`${statusPillBaseClassName} ${statusPillToneClassName[tone]}`}>
      {label || status}
    </span>
  );
}

export function CopyDecisionTable({
  title,
  rows,
  copyColumnLabel = 'Proposed copy',
}: {
  title?: string;
  rows: CopyDecisionRow[];
  copyColumnLabel?: string;
}) {
  return (
    <>
      {title ? <h3 className={documentCaseStudyH3ClassName}>{title}</h3> : null}

      <div className={`space-y-4 md:hidden ${title ? 'mt-4' : ''}`}>
        {rows.map((row, index) => (
          <article key={index} className={cardClassName}>
            <div
              className={`${cardSectionClassName} flex items-center justify-between gap-3`}
            >
              <p className={labelClassName}>Status</p>
              <StatusPill status={row.status} />
            </div>

            <div className="mx-4 border-t border-color-border-default" />

            <div className={`${cardSectionClassName} ${contentClassName}`}>
              {row.copy}
            </div>

            <div className="mx-4 border-t border-color-border-default" />

            <div className={cardSectionClassName}>
              <p className={`${labelClassName} mb-1`}>Design decision</p>
              <div className={contentClassName}>{row.decision}</div>
            </div>
          </article>
        ))}
      </div>

      <div className={`hidden overflow-x-auto md:block ${title ? 'mt-4' : ''}`}>
        <table className="mt-4 w-full border-collapse">
          <thead>
            <tr>
              <th scope="col" className={headerClassName}>
                {copyColumnLabel}
              </th>
              <th scope="col" className={headerClassName}>
                Status
              </th>
              <th scope="col" className={headerClassName}>
                Design decision
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className={`${contentClassName} ${cellClassName}`}>
                  {row.copy}
                </td>
                <td className={cellClassName}>
                  <StatusPill status={row.status} />
                </td>
                <td className={`${contentClassName} ${cellClassName}`}>
                  {row.decision}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
