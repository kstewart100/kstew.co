import type { ReactNode } from 'react';
import { Children, isValidElement } from 'react';
import { documentCaseStudyBodyClassName, documentCaseStudyH3ClassName } from './CaseStudyLayout';

export type CopyDecisionRow = {
  copy: ReactNode;
  status: ReactNode;
  decision: string;
};

const cellClassName =
  'text-left align-top p-2 border border-color-border-default min-w-[7.5rem] bg-color-bg-surface';

const headerClassName =
  'text-left font-medium p-2 border border-color-border-default min-w-[7.5rem] bg-color-bg-subtle';

const fieldValueClassName = documentCaseStudyBodyClassName;

const cardClassName =
  'rounded-lg border border-color-border-default bg-color-bg-surface overflow-hidden';

const cardSectionClassName = 'px-4 py-3';

const statusLabelClassName =
  'font-heading text-[16px] font-semibold text-color-text-primary';

const decisionLabelClassName =
  'font-heading text-[16px] font-semibold text-color-text-primary mb-1';

const statusPillBaseClassName =
  'inline-flex items-center rounded-md border px-2.5 py-0.5 font-heading text-[16px] font-semibold leading-normal';

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
              <p className={statusLabelClassName}>Status</p>
              <StatusPill status={row.status} />
            </div>

            <div className="mx-4 border-t border-color-border-default" />

            <div className={`${cardSectionClassName} ${fieldValueClassName}`}>
              {row.copy}
            </div>

            <div className="mx-4 border-t border-color-border-default" />

            <div className={cardSectionClassName}>
              <p className={decisionLabelClassName}>Design decision</p>
              <div className={fieldValueClassName}>{row.decision}</div>
            </div>
          </article>
        ))}
      </div>

      <div className={`hidden overflow-x-auto md:block ${title ? 'mt-3' : ''}`}>
        <table className="mt-4 w-full border-collapse text-sm">
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
                <td className={`${fieldValueClassName} ${cellClassName}`}>
                  {row.copy}
                </td>
                <td className={`${cellClassName}`}>
                  <StatusPill status={row.status} />
                </td>
                <td className={`${fieldValueClassName} ${cellClassName}`}>
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
