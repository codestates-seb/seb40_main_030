import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { getTokenIndirectly } from '../../apis/auth';
import { KAKAO_AUTH_CODE_URL } from '../../constants/auth';
import { loginState, accessToken, sessionState } from '../../recoil/login';

const useKakaoLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const setAccessToken = useSetRecoilState(accessToken);
  const setIsSessioned = useSetRecoilState(sessionState);
  const navigate = useNavigate();

  const loginClickHandler = () => {
    if (!isAuthorized) {
      setIsLoading(true);
      window.location.assign(KAKAO_AUTH_CODE_URL);
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
        navigate('/', { replace: true });
      });
    }
  }, []);
  return {
    isAuthorized,
    setIsAuthorized,
    loginClickHandler,
    isLoading,
    setIsLoading,
  };
};

export default useKakaoLogin;
