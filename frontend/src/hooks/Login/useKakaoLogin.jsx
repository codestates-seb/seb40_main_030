import { useRecoilState } from 'recoil';
import { getTokenIndirectly, getTokenDirectly } from '../../apis/auth';
import { loginState } from '../../recoil/login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useKakaoLogin = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); //새로고침 후 로컬스토리지에 토큰이 있는지 확인
    if (token) {
      setIsAuthorized(true);
    } //토큰이 있다면 로그인상태 변경

    const url = new URL(window.location.href); // auth code 가져옴
    const authorizationCode = url.searchParams.get('code');

    if (authorizationCode && !token) {
      //토큰 x 인증코드 o 일때 토큰 발급함
      const type = 'authorization_code';
      getTokenIndirectly(authorizationCode, type).then((data) => {
        console.log('받은 토큰은', data);
        localStorage.setItem('accessToken', data.data.access_token);
        navigate('/logout');
        setIsAuthorized(true); //로그인된 상태
      });

      // const type = 'authorization_code';
      // getTokenDirectly(KAKAO_TOKENCODE_URL, type, authorizationCode).then(
      //   (data) => {
      //     console.log('받은 토큰은', data);
      //     setIsAuthorized(true);
      //   }
      // );
    }
  }, []);
  return { isAuthorized };
};

export default useKakaoLogin;
