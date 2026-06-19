import type { ReactNode } from 'react';
import { documentCaseStudyBodyClassName, documentCaseStudyH3ClassName } from './CaseStudyLayout';

export type CopyDecisionRow = {
  copy: ReactNode;
  status: ReactNode;
  decision: string;
};

const cellClassName =
  'text-left align-top p-2 border border-color-border-notion min-w-[7.5rem]';

const headerClassName =
  'text-left font-medium p-2 border border-color-border-notion min-w-[7.5rem] bg-color-bg-notion-subtle';

const fieldLabelClassName =
  'text-sm font-bold text-color-text-notion mb-1';

const fieldValueClassName = documentCaseStudyBodyClassName;

const cardClassName =
  'border border-color-border-notion bg-color-bg-surface p-4 space-y-3';

function CardField({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className={fieldLabelClassName}>{label}</p>
      <div className={fieldValueClassName}>{children}</div>
    </div>
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
            <CardField label="Status">{row.status}</CardField>
            <CardField label={copyColumnLabel}>{row.copy}</CardField>
            <CardField label="Design decision">{row.decision}</CardField>
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
                <td className={`${fieldValueClassName} ${cellClassName}`}>
                  {row.status}
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
