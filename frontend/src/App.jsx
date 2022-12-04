import { AnimatePresence } from 'framer-motion';
import { cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { DesktopWrapper } from './components/@commons';
import { checkLoginState } from './components/Login/utils';
import { DESKTOP_MEDIA_QUERY } from './constants';
import { useMediaQuery } from './hooks';
import PAGES from './pages';

const App = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const location = useLocation();
  const pages = useRoutes(PAGES);
  checkLoginState();

  return (
    <AnimatePresence>
      {matches && <DesktopWrapper />}
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
