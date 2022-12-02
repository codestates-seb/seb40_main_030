import KakaoLogin from './KaKaoLogin/KaKaoLogin';

import { LoginFormContainer } from './LoginForm.style';
import GenLogin from './GenLogin/GenLogin';
import { KAKAO_AUTH_CODE_URL } from '@/constants/auth';

import useKakaoLogin from '../../hooks/Login/useKakaoLogin';

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
