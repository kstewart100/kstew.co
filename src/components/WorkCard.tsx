import React from 'react';
import { Link } from 'react-router-dom';
import {
  CompanyWordmark,
  hasCompanyWordmark,
} from './CompanyWordmark';

export interface WorkCardProps {
  label: string;
  title: string;
  href: string;
}

export function WorkCard({ label, title, href }: WorkCardProps) {
  return (
    <Link
      to={href}
      className="work-card flex flex-col h-full min-h-[260px] md:min-h-[320px] bg-color-bg-surface p-8 md:p-12 border-2 shadow-navy-md"
    >
      <div className="mb-8">
        {hasCompanyWordmark(label) ? (
          <CompanyWordmark
            name={label}
            className={
              label === 'Google' ? 'h-8 w-auto text-current' : 'h-7 w-auto text-current'
            }
          />
        ) : (
          <span className="font-mono text-[26px] text-current">{label}</span>
        )}
      </div>
      <h3 className="text-2xl md:text-3xl font-heading font-semibold text-current leading-snug">
        {title}
      </h3>
    </Link>
  );
}
