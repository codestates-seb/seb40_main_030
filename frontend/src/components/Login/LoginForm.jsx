import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { SplashScreen } from '../@commons';
import { renewTokenDirectly } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessTokenVal } from '../../recoil/login';
import axios from 'axios';
import LoginMidNav from '../@layout/LoginLayout/LoginMidNav';
import LoginTopNav from '../@layout/LoginLayout/LoginTopNav';
import LoginBottomNav from '../@layout/LoginLayout/LoginBottomNav';
const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const navigate = useNavigate();

  const getNewTokenHandler = async () => {
    const res = await axios.get('/login/renew');
    console.log('토큰 갱신 버튼 누른후 응답은', res);

    //토큰 재발급
    // renewTokenDirectly().then((res) => {
    //   res?.access_token &&
    //     localStorage.setItem('accessToken', res.access_token);
    // });
  };
  const gobackHandler = () => {
    navigate('/entrance');
  };
  const goEmptyHandler = () => {
    navigate('/empty');
  };

  const testHandler = async (accessToken) => {
    //테스트 api 위한 임시 핸들러
    try {
      const res = await axios.get('/test', {
        headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
      });
      console.log('테스트 api 요청의 응답은', res);
    } catch (error) {
      if (error.response?.statusText === 'Unauthorized') {
        console.log('엑세스 토큰이 없습니다. 재발급요망');
      }
    } finally {
      console.log('testHandler 실행완료');
    }
  };

  return (
    <div>
      {/* <S.LoginContainer> */}
      {/* <button
        onClick={() => testHandler(accessToken)}
        style={{ border: '1px solid black' }}
      >
        test api 테스트
      </button>
      <button onClick={gobackHandler} style={{ border: '1px solid black' }}>
        뒤로 가기
      </button>
      <button onClick={goEmptyHandler} style={{ border: '1px solid black' }}>
        empty이동
      </button>
      <button
        style={{
          border: '1px solid black',
          backgroundColor: 'yellow',
          margin: '10px',
        }}
        onClick={getNewTokenHandler}
      >
        토큰 갱신하기 버튼
      </button>
      <div
        style={{
          margin: '10px',
          backgroundColor: 'skyblue',
          border: '1px solid black',
        }}
      >
        {isAuthorized
          ? `로그인상태창 : ${isAuthorized}`
          : `로그인상태창 : ${isAuthorized}`}
      </div> */}
      <LoginTopNav />
      <LoginMidNav />
      <LoginBottomNav />
      {/* LoginBottomNav 컴포넌트에 아래 KaKaoLogin 컴포넌트 넣어주세요! */}
      <KakaoLogin loginClickHandler={loginClickHandler} />

      {/* </S.LoginContainer> */}
    </div>
  );
};

export default LoginForm;
