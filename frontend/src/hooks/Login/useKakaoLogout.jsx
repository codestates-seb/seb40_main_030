import { useRecoilState } from 'recoil';
import {
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
} from '../../apis/auth';
import { useState } from 'react';
import { loginState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isLoading, setIsloading] = useState(false);
  const logoutClickHandler = () => {
    //백엔드로 로그아웃 요청을 보내고(토큰을)
    // invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
    //   localStorage.setItem('accessToken', '');
    // localStorage.setItem('refreshToken', '');
    //   navigate('/login');
    //   setIsAuthorized(false);
    // });
    setIsloading((preVal) => !preVal);
    //클라이언트에서 카카오 서버로 바로 통신
    invalidateTokenDirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
      console.log('로그아웃 응답은', res);
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      setIsAuthorized(false);
      setIsloading((preVal) => !preVal);
      navigate('/login', { replace: true });
    });
  };
  return {
    isAuthorized,
    setIsAuthorized,
    logoutClickHandler,
    isLoading,
    setIsloading,
  };
};

export default useKakaoLogout;
