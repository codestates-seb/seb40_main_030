import { useLocation, useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { useRecoilState } from 'recoil';
import { loginState } from './recoil/login';
import { cloneElement, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const pages = useRoutes(PAGES);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  // axios.defaults.withCredentials = true;
  const checkLogin = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsAuthorized(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AnimatePresence>
      {cloneElement(pages, { key: location.pathname, location })}
    </AnimatePresence>
  );
};

export default App;
