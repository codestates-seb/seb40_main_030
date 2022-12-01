import { useRecoilState } from 'recoil';

import { setHeaderAccessToken } from '@/apis/auth';
import { accessToken, refreshToken } from '@/recoil/login';

const useOauthLoginCheck = () => {
  const [accessTokenValue, setAccessTokenValue] = useRecoilState(accessToken);
  const [refreshTokenValue, setRefreshTokenValue] =
    useRecoilState(refreshToken);
  console.log('로그인 여부 확인에서 accessToken은', accessTokenValue);
  console.log('로그인 여부 확인에서 refreshToken은', refreshTokenValue);
  const checkLoginState = () => {
    //처음 렌더링 될때 app컴포넌트에서 실행하고 로그인상태 여부 판단
    if (accessTokenValue) {
      console.log('accessToken있음 값은', accessTokenValue);
      //로그인해서 엑세스 토큰이 있고 새로고침안한 상태
      //아무런 동작 안함
    } else {
      if (refreshTokenValue) {
        console.log('accessToken있고 refreshToken 값은', refreshTokenValue);
        //로그인하고 새로고침해서 엑세스토큰은 없지만, 리프레쉬토큰은 있는상태
        //토큰 재발급 프로세스 실행
        //리프레쉬 토큰 지정한 api로 보냄
        //엑세스 토큰받고 프로세스 끝
      } else {
        console.log('accessToken없고 refreshToken 없음');
        //로그인이 해제된 상태
        //특정 페이지로 이동시킨다 ex) '/' ,  '/login'
      }
    }
    console.log('엑세스 토큰 헤더에 심기전 확인값은', accessTokenValue);
    setHeaderAccessToken(accessTokenValue);
    console.log('엑세스 토큰 헤더에 심음');
  };

  return { accessTokenValue, checkLoginState };
};

export default useOauthLoginCheck;
