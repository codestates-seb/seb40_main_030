import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { sendAuthCode } from '@/apis/auth';
import { getAuthCode } from '@/components/Login/utils';

const useOauthLogin = () => {
  const navigate = useNavigate();
  const OauthLogin = async () => {
    const authCode = getAuthCode(); //인증코드 추출

    const res = await sendAuthCode(authCode);
    const accessTokenFromHeader = res.headers.accesstoken.split(' ')[1];
    const refreshTokenFromHeader = res.headers.refreshtoken;

    localStorage.setItem('accesstoken', accessTokenFromHeader);
    localStorage.setItem('refreshtoken', refreshTokenFromHeader);
    localStorage.setItem('loginType', 'kakao');
    if (accessTokenFromHeader && refreshTokenFromHeader) {
      navigate('/', { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    OauthLogin();
  }, []);
};

export default useOauthLogin;
