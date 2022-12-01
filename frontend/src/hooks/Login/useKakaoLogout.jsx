import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { invalidateTokenIndirectly } from '../../apis/auth';
import {
  KAKAO_ACCOUNT_LOGOUT_URL,
  KAKAO_TOKEN_LOGOUT_URL,
} from '../../constants/auth';
import { accessToken, loginState, sessionState } from '../../recoil/login';

const useKakaoLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setAccessToken = useSetRecoilState(accessToken);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isSessioned, setIsSessioned] = useRecoilState(sessionState);
  const navigate = useNavigate();

  const logoutClickHandler = () => {
    console.log('로그아웃 클릭');
    setIsSessioned(false);
    window.location.assign(KAKAO_ACCOUNT_LOGOUT_URL);
  };

  // const invalidateToken = async () => {
  //   setIsLoading((preVal) => !preVal);
  //   const response = await renewTokenIndirectly();
  //   const accessToken = response.data?.access_token.access_token;

  //   invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
  //     (res) => {
  //       setAccessToken('');
  //       setIsAuthorized(false);
  //       setIsLoading((preVal) => !preVal);
  //       navigate('/login');
  //     },
  //   );
  // };
  return {
    isAuthorized,
    setIsAuthorized,
    logoutClickHandler,
    isLoading,
    setIsLoading,
  };
};

export default useKakaoLogout;
