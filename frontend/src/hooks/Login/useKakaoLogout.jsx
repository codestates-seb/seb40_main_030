import { useRecoilState } from 'recoil';
import {
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
} from '../../apis/auth';
import { useState } from 'react';
import { loginState, accessTokenVal } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isLoading, setIsloading] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);

  const logoutClickHandler = () => {
    setIsloading((preVal) => !preVal);
    console.log('엑세스토큰1', accessToken);

    invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL, accessToken).then(
      (res) => {
        console.log('로그아웃 indirectly 응답은', res);
        setAccessToken('');
        setIsAuthorized(false);
        setIsloading((preVal) => !preVal);
        navigate('/login');
      }
    );

    //클라이언트에서 카카오 서버로 바로 통신
    // setIsloading((preVal) => !preVal);
    // invalidateTokenDirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
    //   console.log('로그아웃 응답은', res);
    //   setAccessToken('');
    //   setIsAuthorized(false);
    //   setIsloading((preVal) => !preVal);
    //   navigate('/login', { replace: true });
    // });
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
