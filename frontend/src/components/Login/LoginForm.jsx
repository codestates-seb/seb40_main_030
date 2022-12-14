import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { KAKAO_AUTH_CODE_URL } from '@/constants/auth';
import { useMediaQuery } from '@/hooks';

import GenLogin from './GenLogin/GenLogin';
import KakaoLogin from './KaKaoLogin/KaKaoLogin';
import { LoginFormContainer } from './LoginForm.style';
import { moveToUrl } from './utils';

const LoginForm = () => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <LoginFormContainer>
      <GenLogin />
      {!matches && (
        <KakaoLogin loginClickHandler={() => moveToUrl(KAKAO_AUTH_CODE_URL)} />
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
