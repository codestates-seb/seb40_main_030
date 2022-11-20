import KakaoLogout from '../../components/Login/KakaoLogout';

import { loginState, sessionState } from '../../recoil/login';
import { useRecoilState } from 'recoil';
import { KAKAO_ACCOUNT_LOGOUT_URL } from '../../constants/auth';

const Logout = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const [isSessioned, setIsSessioned] = useRecoilState(sessionState);
  const logoutClickHandler = () => {
    setIsSessioned(false);
    window.location.assign(KAKAO_ACCOUNT_LOGOUT_URL);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
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
      <KakaoLogout logoutClickHandler={logoutClickHandler} />
    </div>
  );
};

export default Logout;
