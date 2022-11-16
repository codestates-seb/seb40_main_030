import { useRecoilState } from 'recoil';
import {
  invalidateTokenDirectly,
  invalidateTokenIndirectly,
} from '../../apis/auth';
import { loginState } from '../../recoil/login';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';

const useKakaoLogout = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);

  const logoutClickHandler = () => {
    //백엔드로 로그아웃 요청을 보내고(토큰을)
    // invalidateTokenIndirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
    //   localStorage.setItem('accessToken', '');
    //   navigate('/login');
    //   setIsAuthorized(false);
    // });

    //클라이언트에서 카카오 서버로 바로 통신
    invalidateTokenDirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
      localStorage.setItem('accessToken', '');
      setIsAuthorized(false);
      navigate('/login', { replace: true });
    });
  };
  return { isAuthorized, setIsAuthorized, logoutClickHandler };
};

export default useKakaoLogout;
