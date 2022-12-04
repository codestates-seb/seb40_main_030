const KakaoLogout = ({ logoutClickHandler }) => {
  return (
    <button
      style={{
        fontSize: '30px',
        border: '1px solid black',
        backgroundColor: 'yellow',
      }}
      onClick={logoutClickHandler}
    >
      카카오 로그아웃 버튼
    </button>
  );
};

export default KakaoLogout;
