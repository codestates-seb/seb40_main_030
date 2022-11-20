import { useRecoilState } from 'recoil';
import { invalidateTokenIndirectly } from '../../apis/auth';
import { useState, useEffect } from 'react';
import { loginState, accessTokenVal, sessionState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const [isLoading, setIsloading] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const navigate = useNavigate();

  const invalidateToken = () => {
    setIsloading((preVal) => !preVal);
    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        console.log('로그아웃 요청의 응답은', res);
        setAccessToken('');
        localStorage.setItem('loginState', 'false');
        setIsloading((preVal) => !preVal);
        navigate('/login');
      }
    );
  };

  useEffect(() => {
    invalidateToken();
  }, []);

  return {
    isLoading,
    setIsloading,
  };
};

export default useKakaoLogout;
