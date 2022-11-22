import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import GenLogin from './GenLogin';

const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();

  return (
    <S.LoginContainer>
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
        <div style={{ margin: '20px 0 20px 0' }}>
          <SignUp />
        </div>
      </div>

      <KakaoLogin loginClickHandler={loginClickHandler} />
    </S.LoginContainer>
  );
};

export default LoginForm;
