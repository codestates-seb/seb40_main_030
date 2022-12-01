import { AnimatePresence } from 'framer-motion';
import { cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';
import PAGES from './pages';

const App = () => {
  const location = useLocation();
  const pages = useRoutes(PAGES);

  useKakaoCheckLogin();

  return (
    <AnimatePresence>
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
