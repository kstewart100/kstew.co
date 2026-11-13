import React from 'react';

export type CaseStudyMetaProps = {
  company: React.ReactNode;
  role: React.ReactNode;
  team: React.ReactNode;
  className?: string;
};

function MetaIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block shrink-0 text-color-text-secondary"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Material-style outlined: apartment */
function IconApartment() {
  return (
    <MetaIcon>
      <path
        d="M3 21V9h4V4h10v5h4v12H13v-4h-2v4H3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 8h.01M12 8h.01M8 12h.01M12 12h.01M8 16h.01M12 16h.01M16 12h.01M16 16h.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </MetaIcon>
  );
}

/** Material-style outlined: badge */
function IconBadge() {
  return (
    <MetaIcon>
      <rect
        x="4"
        y="8"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="13" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8.5 17.5c.7-1.2 1.9-2 3.5-2s2.8.8 3.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9 8V6.5A3 3 0 0 1 12 3.5v0a3 3 0 0 1 3 3V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </MetaIcon>
  );
}

/** Material-style outlined: group */
function IconGroup() {
  return (
    <MetaIcon>
      <circle cx="9" cy="9" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 18.5c.8-2.4 2.8-3.75 5.5-3.75s4.7 1.35 5.5 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 14.85c1.1-.55 2.4-.85 3.75-.85 2.2 0 3.9.95 4.75 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </MetaIcon>
  );
}

const rows = [
  { key: 'company', label: 'Company', Icon: IconApartment },
  { key: 'role', label: 'Role', Icon: IconBadge },
  { key: 'team', label: 'Team', Icon: IconGroup },
] as const;

/**
 * Project facts panel — sits after the intro so credentials follow the story.
 */
export function CaseStudyMeta({
  company,
  role,
  team,
  className = '',
}: CaseStudyMetaProps) {
  const values = { company, role, team };

  return (
    <dl
      className={`case-study-meta w-full rounded-surface border border-color-border-default bg-color-bg-subtle px-6 py-6 md:px-8 md:py-7 ${className}`.trim()}
    >
      <div className="flex flex-col gap-5 md:gap-4">
        {rows.map(({ key, label, Icon }) => (
          <div
            key={key}
            className="grid grid-cols-[1.25rem_1fr] gap-x-3 gap-y-0 items-start md:grid-cols-[1.25rem_minmax(0,1fr)] md:gap-x-4 md:items-center"
          >
            <dt className="m-0 flex items-center pt-0.5 md:pt-0">
              <Icon />
              <span className="sr-only">{label}</span>
            </dt>
            <dd className="font-heading text-[18px] font-medium leading-snug text-color-text-primary m-0">
              {values[key]}
            </dd>
          </div>
        ))}
      </div>
    </dl>
  );
}
