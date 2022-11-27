import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { SplashScreen } from '../@commons';
import { renewTokenDirectly, renewTokenIndirectly } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessTokenVal } from '../../recoil/login';
import axios from 'axios';
// import LoginMidNav from '../@layout/LoginLayout/LoginMidNav';

// import LoginBottomNav from '../@layout/LoginLayout/LoginBottomNav';
import GenLogin from './GenLogin/GenLogin';
const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();

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
        onClick={goPrivateTestHandler}
        style={{ border: '1px solid black' }}
      >
        privatetest이동
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
      <GenLogin />
      {/* <LoginMidNav />
      <LoginBottomNav /> */}
      {/* LoginBottomNav 컴포넌트에 아래 KaKaoLogin 컴포넌트 넣어주세요! */}
      <KakaoLogin loginClickHandler={loginClickHandler} />

      {/* </S.LoginContainer> */}
    </div>
  );
};

export default LoginForm;
