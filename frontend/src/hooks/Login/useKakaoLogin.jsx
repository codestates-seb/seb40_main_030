import { useRecoilState } from 'recoil';
import { getTokenIndirectly } from '../../apis/auth';
import { loginState, accessTokenVal } from '../../recoil/login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTHCODE_URL } from '../../constants/auth';

const useKakaoLogin = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const loginClickHandler = () => {
    //카카오로그인 -> 리다이렉트 with auth code
    if (!isAuthorized) {
      setIsloading(true);
      window.location.assign(KAKAO_AUTHCODE_URL);
    } else {
      console.log('이미 로그인되어 있는 상태입니다.');
    }
  };

  useEffect(() => {
    const url = new URL(window.location.href); // auth code 가져옴
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode) {
      //토큰 x 인증코드 o 일때 토큰 발급함
      console.log('토큰 발급을 위한 인증코드는', authorizationCode);
      getTokenIndirectly(authorizationCode).then((accessTokenAndUserInfo) => {
        console.log('받은 엑세스토큰과 유저정보', accessTokenAndUserInfo);
        setAccessToken(accessTokenAndUserInfo.data.access_token);
        setIsAuthorized(true);
        localStorage.setItem('loginState', 'true');
        setIsloading(false); //로그인된 상태
        navigate('/logout', { replace: true });
      });
    }
  }, []);
  return {
    loginClickHandler,
    isLoading,
    setIsloading,
    isAuthorized,
  };
};

export default useKakaoLogin;
