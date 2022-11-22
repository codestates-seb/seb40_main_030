import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { loginState, accessTokenVal } from '../../recoil/login';
import { renewTokenIndirectly } from '../../apis/auth';

const useKakaoCheckLogin = () => {
  const setAccessToken = useSetRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const checkLoginState = () => {
    setIsAuthorized(isAuthorized);

    renewTokenIndirectly().then((res) => {
      const errorCode = res.data?.access_token?.error_code;
      if (errorCode) {
        setIsAuthorized(false);
        if (errorCode === 'KOE319') {
          console.log('리프레시 토큰이 없는 에러');
        }
      } else {
        setIsAuthorized(true);
        setAccessToken(res.data.access_token); //재발급받은 엑세스토큰을 리액트 상태에 넣어줘야함
        setIsAuthorized(true);
      }
    });
  };

  useEffect(() => {
    checkLoginState();
  }, [isAuthorized]);

  return { isAuthorized, setIsAuthorized };
};

export default useKakaoCheckLogin;
