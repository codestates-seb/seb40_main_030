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
    }
  }, []);
  return {
    loginClickHandler,
    isLoading,
    setIsLoading,
    isAuthorized,
  };
};

export default useKakaoLogin;
