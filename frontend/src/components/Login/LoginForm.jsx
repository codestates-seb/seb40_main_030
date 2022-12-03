import { KAKAO_AUTH_CODE_URL } from '@/constants/auth';

import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import GenLogin from './GenLogin/GenLogin';
import KakaoLogin from './KaKaoLogin/KaKaoLogin';
import { LoginFormContainer } from './LoginForm.style';
import { moveToUrl } from './utils';

const LoginForm = () => {
  // const { isAuthorized } = useKakaoLogin();

  return (
    <LoginFormContainer>
      <GenLogin />
      <KakaoLogin loginClickHandler={() => moveToUrl(KAKAO_AUTH_CODE_URL)} />
    </LoginFormContainer>
  );
};

export default LoginForm;
