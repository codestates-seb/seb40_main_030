import { KAKAO_AUTH_CODE_URL } from '@/constants/auth';

import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import * as S from '../../pages/Login/Login.style';
import KakaoLogin from './KakaoLogin';
import { moveToUrl } from './utils';

const LoginForm = () => {
  // const { isAuthorized } = useKakaoLogin();

  return (
    <S.LoginContainer>
      {/* <div
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

      <KakaoLogin loginClickHandler={() => moveToUrl(KAKAO_AUTH_CODE_URL)} />
    </S.LoginContainer>
  );
};

export default LoginForm;
