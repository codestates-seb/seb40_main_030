import { AnimatePresence } from 'framer-motion';
import { cloneElement, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { DesktopWrapper } from './components/@commons';
import { DESKTOP_MEDIA_QUERY } from './constants';
import { useMediaQuery } from './hooks';
import useOauthLoginCheck from './hooks/Login/useOauthLoginCheck';
import PAGES from './pages';
// import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);
  const location = useLocation();
  const pages = useRoutes(PAGES);
  // const { checkLoginState } = useOauthLoginCheck();
  // checkLoginState();
  // useKakaoCheckLogin();

  useEffect(() => {
    localStorage.setItem('loginState', true);
  }, []);

  return (
    <AnimatePresence>
      {matches && <DesktopWrapper />}
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
