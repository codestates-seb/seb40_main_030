import { useRoutes } from 'react-router-dom';
import PAGES from './pages';
import { constSelector, useRecoilState } from 'recoil';
import { loginState, accessTokenVal } from './recoil/login';
import { useEffect } from 'react';
import axios from 'axios';
import { renewTokenDirectly, renewTokenIndirectly } from './apis/auth';
const App = () => {
  const pages = useRoutes(PAGES);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  // axios.defaults.withCredentials = true;

  const checkLoginState = () => {
    if (!isAuthorized && !accessToken) {
      renewTokenIndirectly().then((res) => {
        console.log('재발급 후 받은 응답은', res);
        const errorCode = res.data?.error_code;
        if (errorCode) {
          console.log('에러코드', errorCode);
          if (errorCode === 'KOE319') {
            console.log('리프레시 토큰이 없는 에러');
          }
        } else {
          console.log('재발급 되었습니다.');
          console.log('재발급받은 토큰', res.data.access_token);
          setAccessToken(res.data.access_token); //재발급받은 엑세스토큰을 리액트 상태에 넣어줘야함
          setIsAuthorized(true); //재발급되었으면 상태를 변경
        }
      });
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return pages;
};

export default App;
