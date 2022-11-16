import { useRecoilState } from 'recoil';
import { getTokenDirectly, getTokenIndirectly } from '../../apis/auth';
import { loginState } from '../../recoil/login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_AUTHCODE_URL, KAKAO_TOKENCODE_URL } from '../../constants/auth';

const useKakaoLogin = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const navigate = useNavigate();

  const loginClickHandler = () => {
    //카카오로그인 -> 리다이렉트 with auth code
    console.log('카카오로그인 클릭');
    console.log(KAKAO_AUTHCODE_URL);
    window.location.assign(KAKAO_AUTHCODE_URL);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); //새로고침 후 로컬스토리지에 토큰이 있는지 확인
    if (token) {
      setIsAuthorized(true);
    } //토큰이 있다면 로그인상태 변경

    const url = new URL(window.location.href); // auth code 가져옴
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode && !token) {
      //토큰 x 인증코드 o 일때 토큰 발급함
      getTokenIndirectly(authorizationCode).then((data) => {
        console.log('받은 토큰은', data);
        localStorage.setItem('accessToken', data.data.access_token);
        localStorage.setItem('refreshToken', data.data.refresh_token);
        navigate('/logout');
        setIsAuthorized(true); //로그인된 상태
      });

      // getTokenDirectly(KAKAO_TOKENCODE_URL, authorizationCode).then((data) => {
      //   console.log('받은 asdasd토큰은', data);
      //   localStorage.setItem('accessToken', data.access_token);
      // localStorage.setItem('refreshToken', data.data.refresh_token);
      //   navigate('/logout');
      //   setIsAuthorized(true);
      // });
    }
  }, []);
  return { isAuthorized, setIsAuthorized, loginClickHandler };
};

export default useKakaoLogin;
