import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';
import KakaoLogout from '../../components/Login/KakaoLogout';

const Logout = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);

  return (
    <>
      <div>로그인 후 페이지입니다.</div>
      <div>{isAuthorized ? `로그인됨 ${isAuthorized}` : '로그인 안됨'}</div>
      <KakaoLogout />
    </>
  );
};

export default Logout;
