import { useRecoilState, useSetRecoilState } from 'recoil';
import { invalidateTokenIndirectly } from '../../apis/auth';
import { useState } from 'react';
import { loginState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setAccessToken = useSetRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isSessioned, setIsSessioned] = useRecoilState(sessionState);
  const navigate = useNavigate();

  const logoutClickHandler = () => {
    setIsSessioned(false);
    window.location.assign(KAKAO_ACCOUNT_LOGOUT_URL);
  };

  const invalidateToken = async () => {
    setIsLoading((preVal) => !preVal);
    const response = await renewTokenIndirectly();
    const accessToken = response.data?.access_token.access_token;

    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        setAccessToken('');
        setIsAuthorized(false);
        setIsLoading((preVal) => !preVal);
        navigate('/login');
      }
    );
  };
  return {
    isAuthorized,
    setIsAuthorized,
    logoutClickHandler,
    isLoading,
    setIsLoading,
    logoutClickHandler,
    isAuthorized,
  };
};

export default useKakaoLogout;
