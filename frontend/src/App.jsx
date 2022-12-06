import { AnimatePresence } from 'framer-motion';
import { cloneElement, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { DesktopWrapper } from './components/@commons';
import { DESKTOP_MEDIA_QUERY } from './constants';
import { useMediaQuery } from './hooks';
import useOauthLoginCheck from './hooks/Login/useOauthLoginCheck';
import PAGES from './pages';

const App = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const location = useLocation();
  const pages = useRoutes(PAGES);
  const { checkOauthLoginState } = useOauthLoginCheck();
  checkOauthLoginState();

  return (
    <AnimatePresence>
      {matches && <DesktopWrapper />}
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
