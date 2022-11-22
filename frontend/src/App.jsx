import { useLocation, useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { cloneElement } from 'react';

import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const pages = useRoutes(PAGES);

  return (
    <AnimatePresence>
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
