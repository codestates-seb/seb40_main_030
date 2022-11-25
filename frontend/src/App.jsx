import { AnimatePresence } from 'framer-motion';
import { cloneElement, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import PAGES from './pages';
// import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const location = useLocation();
  const pages = useRoutes(PAGES);

  // useKakaoCheckLogin();

  useEffect(() => {
    localStorage.setItem('loginState', true);
  }, []);

  return (
    <AnimatePresence>
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
