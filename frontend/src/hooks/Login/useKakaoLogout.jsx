import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  invalidateTokenIndirectly,
  renewTokenIndirectly,
} from '../../apis/auth';
import { useState, useEffect } from 'react';
import { loginState, accessTokenVal, sessionState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import {
  KAKAO_TOKEN_LOGOUT_URL,
  KAKAO_ACCOUNT_LOGOUT_URL,
} from '../../constants/auth';

const useKakaoLogout = () => {
  const [isLoading, setIsloading] = useState(false);
  const setAccessToken = useSetRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isSessioned, setIsSessioned] = useRecoilState(sessionState);
  const navigate = useNavigate();

  const logoutClickHandler = () => {
    //로그아웃 버튼 클릭시 url 이동
    setIsSessioned(false);
    window.location.assign(KAKAO_ACCOUNT_LOGOUT_URL);
  };

  const invalidateToken = async () => {
    //토큰 만료 함수
    setIsloading((preVal) => !preVal);
    const response = await renewTokenIndirectly();
    const accessToken = response.data?.access_token.access_token;

    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        console.log('로그아웃 요청의 응답은', res);
        setAccessToken('');
        setIsAuthorized(false);
        setIsloading((preVal) => !preVal);
        navigate('/login');
      }
    );
  };

  useEffect(() => {
    if (!isSessioned) {
      invalidateToken();
    }
  }, [isSessioned]); //카카오 인증서버에서 리다이렉트 된후 isSessioned 값 변경으로 실행됨

  return {
    isLoading,
    setIsloading,
    logoutClickHandler,
    isAuthorized,
  };
};

export default useKakaoLogout;
