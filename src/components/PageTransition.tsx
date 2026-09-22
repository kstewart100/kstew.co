import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation, type Location } from 'react-router-dom';

const EXIT_MS = 800;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function PageTransition({
  children,
}: {
  children: React.ReactElement;
}) {
  const location = useLocation();
  const prevLocationRef = useRef(location);
  const [exit, setExit] = useState<{
    location: Location;
    scrollY: number;
  } | null>(null);

  useLayoutEffect(() => {
    const prev = prevLocationRef.current;
    if (prev.pathname !== location.pathname && !prefersReducedMotion()) {
      setExit({ location: prev, scrollY: window.scrollY });
    }
    prevLocationRef.current = location;
  }, [location]);

  useEffect(() => {
    if (!exit) return undefined;
    const timeout = window.setTimeout(() => setExit(null), EXIT_MS);
    return () => window.clearTimeout(timeout);
  }, [exit]);

  useEffect(() => {
    document.documentElement.classList.toggle('pt-animating', Boolean(exit));
    return () => document.documentElement.classList.remove('pt-animating');
  }, [exit]);

  const handleExitEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (!event.animationName.toLowerCase().includes('movetoright')) return;
    setExit(null);
  };

  return (
    <div className={`pt-perspective${exit ? ' pt-perspective-animating' : ''}`}>
      {exit ? (
        <div
          key={`exit-${exit.location.pathname}`}
          className="pt-page pt-page-ontop pt-page-moveToRightEasing"
          aria-hidden="true"
          onAnimationEnd={handleExitEnd}
        >
          <div
            className="pt-page-exit-inner"
            style={{ transform: `translateY(${-exit.scrollY}px)` }}
          >
            {React.cloneElement(children, { location: exit.location })}
          </div>
        </div>
      ) : null}
      <div
        key={location.pathname}
        className={exit ? 'pt-page pt-page-moveFromLeft' : 'pt-page'}
      >
        {children}
      </div>
    </div>
  );
}
