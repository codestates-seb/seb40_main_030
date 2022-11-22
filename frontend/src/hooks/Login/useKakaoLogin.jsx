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
      console.log('이미 로그인되어 있는 상태입니다.');
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode && !token) {
      //토큰 x 인증코드 o 일때 토큰 발급함
      getTokenIndirectly(authorizationCode).then((data) => {
        console.log('받은 토큰은', data);
        localStorage.setItem('accessToken', data.data.access_token);
        localStorage.setItem('refreshToken', data.data.refresh_token);
        console.log('logout페이지로 이동');
        navigate('/logout', { replace: true });
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
