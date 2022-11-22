import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { SplashScreen } from '../@commons';
import GenLogin from './GenLogin';
import SignUp from './SignUp';
import { useRecoilValue } from 'recoil';
import { accessTokenVal } from '../../recoil/login';
import { testHandler } from '../../apis/auth';
const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();
  const accessToken = useRecoilValue(accessTokenVal);

  return (
    <S.LoginContainer>
      <button
        onClick={() => testHandler(accessToken)}
        style={{ border: '1px solid black' }}
      >
        test api 테스트
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
      </div>
      <div style={{ height: '300px', border: '1px solid black' }}>
        <div>
          <GenLogin />
        </div>
        <div style={{ margin: '20px 0 20px 0' }}></div>
      </div>

      <KakaoLogin loginClickHandler={loginClickHandler} />
    </S.LoginContainer>
  );
};

export default LoginForm;
