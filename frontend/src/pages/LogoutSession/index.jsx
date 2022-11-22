import useKakaoLogout from '../../hooks/Login/useKakaoLogout';

const LogoutSession = () => {
  const { isAuthorized } = useKakaoLogout();

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
