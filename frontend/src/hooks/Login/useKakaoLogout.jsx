import { useRecoilState } from 'recoil';
import {
  invalidateTokenIndirectly,
  renewTokenIndirectly,
} from '../../apis/auth';
import { useState, useEffect } from 'react';
import { loginState, accessTokenVal } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const [isLoading, setIsloading] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const navigate = useNavigate();

  const invalidateToken = async () => {
    setIsloading((preVal) => !preVal);
    const response = await renewTokenIndirectly();
    const accessToken = response.data?.access_token.access_token;

    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        console.log('로그아웃 요청의 응답은', res);
        setAccessToken('');
        localStorage.setItem('loginState', 'false');
        setIsAuthorized(false);
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
