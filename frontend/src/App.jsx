import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { useRecoilState } from 'recoil';
import { loginState } from './recoil/login';
import { useEffect } from 'react';
const App = () => {
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

  return pages;
};

export default App;
