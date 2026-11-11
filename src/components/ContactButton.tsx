import React from 'react';

type ContactButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function ContactButton({
  href = 'mailto:hello@kstew.co',
  label = 'Contact me',
  className = '',
}: ContactButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`m3-filled-button ${className}`.trim()}
    >
      <span className="m3-filled-button__label">{label}</span>
    </a>
  );
}
