import { AnimatePresence } from 'framer-motion';
import { cloneElement, ReactElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { DesktopWrapper } from './components/@commons';
import { DESKTOP_MEDIA_QUERY } from './constants';
import { useMediaQuery, useOauthLoginCheck } from './hooks';

import PAGES from './pages';

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const location = useLocation();
  const pages = useRoutes(PAGES);
  const { checkOauthLoginState } = useOauthLoginCheck();
  checkOauthLoginState();

  return (
    <AnimatePresence>
      {matches && <DesktopWrapper />}
      {cloneElement(pages as ReactElement, {
        key: location.pathname,
        location,
      })}
    </AnimatePresence>
  );
};

export default App;
