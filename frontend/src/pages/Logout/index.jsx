import KakaoLogout from '../../components/Login/KakaoLogout';
import useKakaoLogout from '../../hooks/Login/useKakaoLogout';

const Logout = () => {
  const { logoutClickHandler, isAuthorized } = useKakaoLogout();

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
