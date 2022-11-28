import KakaoLogin from './KaKaoLogin/KaKaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { SplashScreen } from '../@commons';
import { renewTokenDirectly, renewTokenIndirectly } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { accessTokenVal } from '../../recoil/login';
import axios from 'axios';
import { LoginFormContainer } from './LoginForm.style';
import GenLogin from './GenLogin/GenLogin';

const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();

  return (
    <LoginFormContainer>
      <GenLogin />
      <KakaoLogin loginClickHandler={loginClickHandler} />
    </LoginFormContainer>
  );
};

export default LoginForm;
