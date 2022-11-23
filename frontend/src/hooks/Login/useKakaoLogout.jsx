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

  useEffect(() => {
    if (!isSessioned) {
      invalidateToken();
    }
  }, [isSessioned]);

  return {
    isLoading,
    setIsLoading,
    logoutClickHandler,
    isAuthorized,
  };
};

export default useKakaoLogout;
