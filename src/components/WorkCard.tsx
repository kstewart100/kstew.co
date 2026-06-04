import React from 'react';
import { Link } from 'react-router-dom';

export interface WorkCardProps {
  label: string;
  title: string;
  href: string;
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WorkCard({ label, title, href }: WorkCardProps) {
  return (
    <Link
      to={href}
      className="group flex flex-col h-full min-h-[260px] md:min-h-[320px] bg-color-bg-surface p-8 md:p-12 border border-color-border-default shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg [&:hover_span]:text-color-interactive-primary [&:hover_h3]:text-color-interactive-primary"
    >
      <div className="flex items-start justify-between mb-8">
        <span className="font-mono text-[26px] text-color-text-secondary transition-colors duration-300">
          {label}
        </span>
        <ArrowUpRight className="w-5 h-5 text-color-text-secondary opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-color-interactive-primary" />
      </div>
      <h3 className="text-2xl md:text-3xl font-heading font-bold text-color-text-primary leading-snug transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
}
