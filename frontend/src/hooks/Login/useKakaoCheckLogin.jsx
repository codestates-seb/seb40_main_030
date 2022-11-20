import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { loginState, accessTokenVal, sessionState } from '../../recoil/login';
import { renewTokenIndirectly } from '../../apis/auth';

const useKakaoCheckLogin = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);

  const checkLoginState = () => {
    //리프레쉬 토큰만 가지고 있는상태에서 새로고침할때 다시 엑세스토큰을 받아옴 = 로컬스토리지 로그인상태가 true인경우
    const localLogin = JSON.parse(localStorage.getItem('loginState'));
    console.log('app useeffect 안에서 로컬스토리지값', localLogin);
    if (localLogin) {
      renewTokenIndirectly().then((res) => {
        console.log('체크로그인에서 토큰재발급의 응답은', res);
        console.log(JSON.parse(localStorage.getItem('loginState')));
        const errorCode = res.data?.access_token?.error_code;

        if (errorCode) {
          console.log('에러코드', errorCode);
          if (errorCode === 'KOE319') {
            console.log('리프레시 토큰이 없는 에러');
          }
        } else {
          console.log('재발급받은 토큰', res.data.access_token);
          setAccessToken(res.data.access_token); //재발급받은 엑세스토큰을 리액트 상태에 넣어줘야함
          setIsAuthorized(true);
        }
      });
    }
  };

  useEffect(() => {
    console.log('useEffect 실행');
    checkLoginState();
  }, []);

  return { isAuthorized, setIsAuthorized };
};

export default useKakaoCheckLogin;
