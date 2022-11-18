import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { useRecoilState } from 'recoil';
import { loginState, accessTokenVal } from './recoil/login';
import { useEffect } from 'react';
import axios from 'axios';
import { renewTokenDirectly, renewTokenIndirectly } from './apis/auth';
const App = () => {
  const pages = useRoutes(PAGES);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  // axios.defaults.withCredentials = true;

  const checkLogin = () => {
    if (!isAuthorized) {
      renewTokenIndirectly().then((res) => {
        console.log('재발급응답', res);
        console.log('재발급됐음?', !!!res.data?.error);
        !!res.data?.error ? '' : setIsAuthorized(true);
        //재발급받은 엑세스토큰을 리액트 상태에 넣어줘야함
        console.log('재발급받은 토큰', res.data.access_token);
        setAccessToken(res.data.access_token);
      });
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return pages;
};

export default App;
