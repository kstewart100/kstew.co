import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

type ContactButtonProps = {
  email?: string;
  label?: string;
  className?: string;
};

type PanelPhase = 'hidden' | 'revealed' | 'copied';

type PanelCoords = {
  top: number;
  right: number;
};

function maskEmail(email: string) {
  return email.replace(/[^@.]/g, '•');
}

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = value;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      return document.execCommand('copy');
    } catch {
      return false;
    } finally {
      document.body.removeChild(ta);
    }
  }
}

function EyeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="9"
        y="9"
        width="11"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M5 15V5.8A1.8 1.8 0 0 1 6.8 4H16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ContactButton({
  email = 'hello@kstew.co',
  label = 'Contact me',
  className = '',
}: ContactButtonProps) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<PanelPhase>('hidden');
  const [coords, setCoords] = useState<PanelCoords | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const titleId = useId();
  const statusId = useId();
  const resetTimer = useRef<number | null>(null);

  const close = () => {
    setOpen(false);
    setPhase('hidden');
    setCoords(null);
    if (resetTimer.current) {
      window.clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }
  };

  const updateCoords = () => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const rect = trigger.getBoundingClientRect();
    setCoords({
      top: rect.bottom + 10,
      right: Math.max(8, window.innerWidth - rect.right),
    });
  };

  useLayoutEffect(() => {
    if (!open) return undefined;
    updateCoords();
    window.addEventListener('resize', updateCoords);
    window.addEventListener('scroll', updateCoords, true);
    return () => {
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (rootRef.current?.contains(target) || panelRef.current?.contains(target)) {
        return;
      }
      close();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    },
    [],
  );

  const toggle = () => {
    if (open) {
      close();
      return;
    }
    setPhase('hidden');
    setOpen(true);
  };

  const reveal = () => {
    setPhase('revealed');
  };

  const copy = async () => {
    const ok = await copyText(email);
    if (!ok) return;
    setPhase('copied');
    if (resetTimer.current) window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      setPhase('revealed');
      resetTimer.current = null;
    }, 1600);
  };

  const revealed = phase !== 'hidden';
  const actionLabel =
    phase === 'copied' ? 'Copied' : revealed ? 'Copy email' : 'Reveal email';

  const panel =
    open && coords
      ? createPortal(
          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="false"
            aria-labelledby={titleId}
            className="contact-reveal__panel"
            style={{ top: coords.top, right: coords.right }}
          >
            <div className="contact-reveal__header">
              <div className="contact-reveal__intro">
                <p id={titleId} className="contact-reveal__title">
                  My email
                </p>
                <p className="contact-reveal__caption">
                  {revealed
                    ? 'Ready when you are'
                    : 'Hidden to keep the spammers at bay'}
                </p>
              </div>
              <button
                type="button"
                className="contact-reveal__icon-btn"
                aria-label="Close contact details"
                onClick={() => {
                  close();
                  triggerRef.current?.focus();
                }}
              >
                <CloseIcon />
              </button>
            </div>

            <div className="contact-reveal__row">
              <p
                className={`contact-reveal__email${
                  revealed ? '' : ' contact-reveal__email--masked'
                }`}
                aria-live="polite"
              >
                {revealed ? email : maskEmail(email)}
                <span className="sr-only">{revealed ? '' : 'Email hidden'}</span>
              </p>
              <button
                type="button"
                className={`contact-reveal__action${
                  phase === 'copied' ? ' contact-reveal__action--done' : ''
                }`}
                onClick={revealed ? copy : reveal}
                aria-describedby={statusId}
              >
                <span className="contact-reveal__action-icon" aria-hidden>
                  {phase === 'copied' ? (
                    <CheckIcon />
                  ) : revealed ? (
                    <CopyIcon />
                  ) : (
                    <EyeIcon />
                  )}
                </span>
                <span>{actionLabel}</span>
              </button>
            </div>

            <p id={statusId} className="sr-only" aria-live="polite">
              {phase === 'copied'
                ? 'Email copied to clipboard'
                : revealed
                  ? 'Email revealed'
                  : 'Email is hidden'}
            </p>
          </div>,
          document.body,
        )
      : null;

  return (
    <div ref={rootRef} className={`contact-reveal ${className}`.trim()}>
      <button
        ref={triggerRef}
        type="button"
        className="m3-filled-button"
        aria-label={label}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={toggle}
      >
        <span className="m3-filled-button__label">{label}</span>
      </button>
      {panel}
    </div>
  );
}
