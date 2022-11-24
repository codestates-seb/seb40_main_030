import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { renewTokenIndirectly } from '../../apis/auth';
import { loginState, accessTokenVal } from '../../recoil/login';

const useKakaoCheckLogin = () => {
  const setAccessToken = useSetRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const checkLoginState = () => {
    setIsAuthorized(isAuthorized);

    renewTokenIndirectly().then((res) => {
      const errorCode = res?.data?.access_token?.error_code;

      if (errorCode) {
        setIsAuthorized(false);
        if (errorCode === 'KOE319') {
          console.log('error');
        }
      } else {
        setIsAuthorized(true);
        setAccessToken(res.data.access_token); //재발급받은 엑세스토큰을 리액트 상태에 넣어줘야함
      }
    });
  };

  useEffect(() => {
    checkLoginState();
  }, [isAuthorized]);

  return { isAuthorized, setIsAuthorized };
};

export default useKakaoCheckLogin;
