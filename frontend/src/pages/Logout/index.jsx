import { accessTokenVal, loginState } from '../../recoil/login';
import { useRecoilState } from 'recoil';
import KakaoLogout from '../../components/Login/KakaoLogout';
import useKakaoLogout from '../../hooks/Login/useKakaoLogout';
import axios from 'axios';
const Logout = () => {
  const { logoutClickHandler, isAuthorized } = useKakaoLogout();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const testHandler = async (accessToken) => {
    //테스트 api 위한 임시 핸들러
    console.log('테스트api요청시 엑세스토큰은', accessToken);
    const res = axios.get('/test', {
      headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
    });
    console.log('테스트 api 요청의 응답은', res);
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
      <button onClick={() => testHandler(accessToken)}>테스트 요청</button>
    </div>
  );
};

export default Logout;
