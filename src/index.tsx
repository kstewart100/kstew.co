import React, { useState, useEffect } from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import { LoadingScreen } from './components/LoadingScreen';

function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen" aria-hidden={isLoading ? 'true' : 'false'}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="global-loader" />}
      </AnimatePresence>
    </>
  );
}

render(<AppWrapper />, document.getElementById('root'));