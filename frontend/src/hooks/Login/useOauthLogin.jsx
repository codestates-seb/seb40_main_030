import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { login, sendAuthCode } from '@/apis/auth';
import { getAuthCode } from '@/components/Login/utils';
import { accessToken, refreshToken } from '@/recoil/login';

const useOauthLogin = () => {
  // const [accessTokenValue, setAccessTokenValue] = useRecoilState(accessToken);
  // const [refreshTokenValue, setRefreshTokenValue] =
  //   useSetRecoilState(refreshToken);

  const navigate = useNavigate();
  const OauthLogin = async () => {
    const authCode = getAuthCode(); //인증코드 추출
    console.log('리다이렉트페이지에서 authCode코드', authCode);
    const res = await sendAuthCode(authCode);
    const accessTokenFromHeader = res.headers.accesstoken.split(' ')[1];
    const refreshTokenFromHeader = res.headers.refreshtoken;
    console.log('백엔드로 받은 accesstoken', accessTokenFromHeader);
    console.log('백엔드로 받은 refreshtoken', refreshTokenFromHeader);
    // if (accessTokenValue && refreshTokenValue) {
    //   navigate('/', { replace: true });
    // } else {
    //   console.log('로그인 실패 저장된 엑세스토큰/리프레쉬토큰이 없음');
    //   navigate('/login', { replace: true });
    // }

    //1 응답이 정상이면 (엑세스 or 리프레쉬 토큰이 있으면) 다음 단계 진행
    //2 응답이 정상이 아니라면 다시 로그인페이지로 리다이렉팅(/login)

    //res가 정상
    //1-1
    // if (accessTokenFromHeader && refreshTokenFromHeader) {
    //   //엑세스 토큰 recoil effect로 상태 저장 localstorage 동시 저장
    //   setAccessTokenValue(accessTokenFromHeader); //응답안의 엑세스토큰 값
    //   //리프레쉬 토큰 recoil effect로 상태 저장 localstorage 동시 저장
    //   setRefreshTokenValue(refreshTokenFromHeader); //응답안의 리프레쉬토큰 값
    //   console.log('전역상태에 저장된 accesstoken', accessTokenValue);
    //   //헤더에 accesstoken 심기
    //   //메인페이지로 이동
    // }
  };

  useEffect(() => {
    OauthLogin();
  }, []);

  return;
};

export default useOauthLogin;
