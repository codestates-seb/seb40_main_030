import useSignUp from '../../../hooks/SignUp/useSignUp';
import * as S from './Bottom.style';

const SignUpBottom = () => {
  const { signUpSubmit } = useSignUp();

  return (
    <div>
      <S.SignUpBottomContainer>
        <S.SignUpSubmitBtn onClick={signUpSubmit}>
          회원가입 완료
        </S.SignUpSubmitBtn>
      </S.SignUpBottomContainer>
    </div>
  );
};

export default SignUpBottom;
