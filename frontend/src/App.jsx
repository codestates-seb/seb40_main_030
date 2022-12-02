import { AnimatePresence } from 'framer-motion';
import { cloneElement } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import useOauthLoginCheck from './hooks/Login/useOauthLoginCheck';
import PAGES from './pages';
// import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const location = useLocation();
  const pages = useRoutes(PAGES);
  // const { checkLoginState } = useOauthLoginCheck();
  // checkLoginState();

  // useKakaoCheckLogin();

  return (
    <AnimatePresence>
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
