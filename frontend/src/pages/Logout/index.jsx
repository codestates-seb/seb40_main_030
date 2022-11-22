import KakaoLogout from '../../components/Login/KakaoLogout';
import { accessTokenVal } from '../../recoil/login';
import { useRecoilValue } from 'recoil';
import useKakaoLogout from '../../hooks/Login/useKakaoLogout';
import { testHandler } from '../../apis/auth';

const Logout = () => {
  const { isAuthorized, logoutClickHandler } = useKakaoLogout();
  const accessToken = useRecoilValue(accessTokenVal);
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
      <button
        onClick={() => testHandler(accessToken)}
        style={{ border: '1px solid black' }}
      >
        test api 테스트
      </button>
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
