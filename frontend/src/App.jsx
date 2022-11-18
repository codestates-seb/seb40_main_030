import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { useRecoilState } from 'recoil';
import { loginState } from './recoil/login';
import { useEffect } from 'react';
import axios from 'axios';
import { renewTokenDirectly, renewTokenIndirectly } from './apis/auth';
const App = () => {
  const pages = useRoutes(PAGES);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  // axios.defaults.withCredentials = true;

  const checkLogin = () => {
    if (!isAuthorized) {
      renewTokenIndirectly().then((res) => {
        console.log('재발급응답', res);
        console.log('재발급됐음?', !!!res.data?.error);
        !!res.data?.error ? '' : setIsAuthorized(true);
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return pages;
};

export default App;
