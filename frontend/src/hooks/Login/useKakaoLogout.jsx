import { useRecoilState } from 'recoil';
import { invalidateTokenIndirectly } from '../../apis/auth';
import { useState, useEffect } from 'react';
import { loginState, accessTokenVal, sessionState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isLoading, setIsloading] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const [isSessioned, setIsSessioned] = useRecoilState(sessionState);

  const invalidateToken = () => {
    setIsloading((preVal) => !preVal);

    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        console.log('로그아웃 indirectly 응답은', res);
        setAccessToken('');
        setIsAuthorized(false);
        setIsloading((preVal) => !preVal);
        navigate('/login');
      }
    );
  };
  useEffect(() => {
    console.log('세션 만료시키고 난 다음 useEffect실행');
    localStorage.setItem('kakaoSession', 'false');
    setIsSessioned(false);
    console.log('바꾸고난다음 세션', localStorage.getItem('kakaoSession'));
    invalidateToken();
  }, []);
  //isAuth.. 로그인은 되어있지만 세션상태가 false일때가 토큰 무효화를 해야하는 떄임
  return {
    isAuthorized,
    setIsAuthorized,
    isLoading,
    setIsloading,
    sessionState,
    setIsSessioned,
  };
};

export default useKakaoLogout;
