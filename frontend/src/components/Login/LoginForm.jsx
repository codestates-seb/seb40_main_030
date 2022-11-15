import KaKaoLogin from './KaKaoLogin';
import * as S from './LoginStyledComp.style';
import { KAKAO_AUTHCODE_URL } from '../../constants/auth';

const LoginForm = () => {
  const kakaoClickHandler = () => {
    //카카오로그인 -> 리다이렉트 with auth code
    console.log('카카오로그인 클릭');
    console.log(KAKAO_AUTHCODE_URL);
    window.location.assign(KAKAO_AUTHCODE_URL);
  };

  return (
    <S.LoginContainer>
      <div //임시로 넣어둠
        style={{ height: '300px', border: '1px solid black' }}
      >
        일반회원 회원가입...로그인
      </div>
      <KaKaoLogin clickHandler={kakaoClickHandler} />
    </S.LoginContainer>
  );
};

export default LoginForm;
