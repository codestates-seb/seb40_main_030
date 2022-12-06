import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { sendAuthCode } from '@/apis/auth';
import { getAuthCode } from '@/components/Login/utils';

const useOauthLogin = () => {
  // const setUserTypeValue = useSetRecoilState(userType);
  // const setAccessToken = useSetRecoilState(accessToken);
  // const setRefreshToken = useSetRecoilState(refreshToken);

  const navigate = useNavigate();
  const OauthLogin = async () => {
    const authCode = getAuthCode(); //인증코드 추출

    const res = await sendAuthCode(authCode);
    const accessTokenFromHeader = res.headers.accesstoken.split(' ')[1];
    const refreshTokenFromHeader = res.headers.refreshtoken;

    localStorage.setItem('accesstoken', accessTokenFromHeader);
    localStorage.setItem('refreshtoken', refreshTokenFromHeader);

    if (accessTokenFromHeader && refreshTokenFromHeader) {
      navigate('/', { replace: true });
    } else {
      console.log('로그인 실패 저장된 엑세스토큰/리프레쉬토큰이 없음');
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    OauthLogin();
  }, []);
};

export default useOauthLogin;
