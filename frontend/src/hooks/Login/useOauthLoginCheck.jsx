import { setHeaderAccessToken } from '@/apis/auth';

const useOauthLoginCheck = () => {
  const checkOauthLoginState = () => {
    const accessTokenInLocal = localStorage.getItem('accesstoken');
    const accessTokenInSession = sessionStorage.getItem('accesstoken');
    const refreshToken = localStorage.getItem('refreshtoken');

    //추후 리프레쉬로 엑세스 토큰 재발급받을때 로직구성 일단 주석
    // if (accessTokenInLocal || accessTokenInSession) {
    //   //로그인해서 엑세스 토큰이 있고 새로고침안한 상태
    //   //아무런 동작 안함
    // } else {
    //   if (refreshToken) {
    //     //로그인하고 새로고침해서 엑세스토큰은 없지만, 리프레쉬토큰은 있는상태
    //     //토큰 재발급 프로세스 실행
    //     //리프레쉬 토큰 지정한 api로 보냄
    //     //엑세스 토큰받고 프로세스 끝
    //   } else {
    //     //로그인이 해제된 상태
    //     //특정 페이지로 이동시킨다 ex) '/' ,  '/login'
    //   }
    // }
    setHeaderAccessToken(accessTokenInLocal || accessTokenInSession);
  };

  return { checkOauthLoginState };
};

export default useOauthLoginCheck;
