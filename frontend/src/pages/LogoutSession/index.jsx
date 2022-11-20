import useKakaoLogout from '../../hooks/Login/useKakaoLogout';
import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';

const LogoutSession = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  useKakaoLogout();
  return (
    <div
      style={{
        margin: '30px',
        backgroundColor: 'skyblue',
        border: '1px solid black',
      }}
    >
      {isAuthorized
        ? `로그인상태창 : ${isAuthorized}`
        : `로그인상태창 : ${isAuthorized}`}
    </div>
  );
};

export default LogoutSession;
