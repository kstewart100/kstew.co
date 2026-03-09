import { useState, useEffect } from 'react';
import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import '@fontsource/instrument-sans/600.css';
import '@fontsource/instrument-sans/700.css';
import '@fontsource/geist-mono/400.css';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import { LoadingScreen } from './components/LoadingScreen';

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen" aria-hidden={isLoading || undefined}>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <App />
        </BrowserRouter>
      </div>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="global-loader" />}
      </AnimatePresence>
    </>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<AppWrapper />);