import { invalidateTokenDirectly } from '../../apis/auth';
import KaKaoLogin from '../../components/Login/KaKaoLogin';
import { KAKAO_TOKEN_LOGOUT_URL } from '../../constants/auth';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { useNavigate } from 'react-router-dom';
import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';

const Logout = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const logoutHandler = () => {
    //백엔드로 로그아웃 요청을 보내고(토큰을)
    invalidateTokenDirectly(KAKAO_TOKEN_LOGOUT_URL).then((res) => {
      localStorage.setItem('accessToken', '');
      setIsAuthorized(false);
      navigate('/login', { replace: true });
    });
  };

  return (
    <>
      <div>로그인 후 페이지입니다.</div>
      <div>{isAuthorized ? `로그인됨 ${isAuthorized}` : '로그인 안됨'}</div>
      <KaKaoLogin clickHandler={logoutHandler} />
    </>
  );
};

export default Logout;
