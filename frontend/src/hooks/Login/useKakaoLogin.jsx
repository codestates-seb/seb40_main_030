import { useRecoilState, useSetRecoilState } from 'recoil';
import { getTokenIndirectly } from '../../apis/auth';
import { loginState, accessTokenVal, sessionState } from '../../recoil/login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_CODE_URL } from '../../constants/auth';

const useKakaoLogin = () => {
  const setAccessToken = useSetRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const setIsSessioned = useSetRecoilState(sessionState);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginClickHandler = () => {
    if (!isAuthorized) {
      setIsLoading(true);
      window.location.assign(KAKAO_AUTH_CODE_URL);
    } else {
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      getTokenIndirectly(authorizationCode).then((accessTokenAndUserInfo) => {
        setAccessToken(accessTokenAndUserInfo.data.access_token);
        setIsAuthorized(true);
        setIsSessioned(true);
        setIsLoading(false);
        navigate('/logout', { replace: true });
      });

      // getTokenDirectly(KAKAO_TOKENCODE_URL, authorizationCode).then((data) => {
      //   console.log('받은 asdasd토큰은', data);
      //   localStorage.setItem('accessToken', data.access_token);
      // localStorage.setItem('refreshToken', data.data.refresh_token);
      //   navigate('/logout');
      //   setIsAuthorized(true);
      // });
    }
  }, []);
  return {
    isAuthorized,
    setIsAuthorized,
    loginClickHandler,
    isLoading,
    setIsLoading,
    isAuthorized,
  };
};

export default useKakaoLogin;
