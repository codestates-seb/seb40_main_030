import { AnimatePresence } from 'framer-motion';
import { cloneElement, useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { useMediaQuery } from './hooks';
import PAGES from './pages';
// import useKakaoCheckLogin from './hooks/Login/useKakaoCheckLogin';

const App = () => {
  const matches = useMediaQuery('(min-width: 468px)');
  const location = useLocation();
  const pages = useRoutes(PAGES);

  // useKakaoCheckLogin();

  useEffect(() => {
    localStorage.setItem('loginState', true);
  }, []);

  return (
    <AnimatePresence>
      {matches ? (
        <div>모바일로 보러 가기</div>
      ) : (
        cloneElement(pages, { key: location.pathname, location })
      )}
    </AnimatePresence>
  );
};

export default App;
