import useKakaoLogout from '../../hooks/Login/useKakaoLogout';
import { loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';

const LogoutSession = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  // localStorage.setItem('loginState', 'false'); //로그아웃 세션 페이지 렌더링 하면서 localstorage 로그인값을 false로 미리 셋한다
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
