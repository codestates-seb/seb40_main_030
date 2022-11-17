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
  // const checkLogin = () => {
  //   const token = localStorage.getItem('accessToken');
  //   if (token) {
  //     setIsAuthorized(true);
  //   }
  // };
  const checkLogin = () => {
    if (!isAuthorized) {
      renewTokenIndirectly().then((res) => {
        console.log('재발급응답', res);
        console.log('재발급응답뭐임', !!res.data?.error);
        !!res.data?.error ? '' : setIsAuthorized(true);
        // if (!!res.data?.error) {
        //   console.log('재발급 완료', res.data?.error);
        //   setIsAuthorized(true);
        // }
      });
      // renewTokenDirectly();
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return pages;
};

export default App;
