import KakaoLogin from './KakaoLogin';
import * as S from './LoginStyledComp.style';

const LoginForm = () => {
  return (
    <S.LoginContainer>
      <div //임시로 넣어둠
        style={{ height: '300px', border: '1px solid black' }}
      >
        일반회원 회원가입...로그인
      </div>
      <KakaoLogin />
    </S.LoginContainer>
  );
};

export default LoginForm;
