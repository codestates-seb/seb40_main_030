import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { renewTokenDirectly } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import GenLogin from './GenLogin';
import SignUp from './SignUp';

const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();
  const navigate = useNavigate();
  const getNewTokenHandler = () => {
    //토큰 재발급
    renewTokenDirectly().then((res) => {
      console.log('getNewTokenHandler 응답', res);
      res?.access_token &&
        localStorage.setItem('accessToken', res.access_token);
    });
  };
  const gobackHandler = () => {
    navigate('/entrance');
  };
  const goEmptyHandler = () => {
    navigate('/empty');
  };

  return (
    <S.LoginContainer>
      <button onClick={gobackHandler} style={{ border: '1px solid black' }}>
        뒤로 가기
      </button>
      <button onClick={goEmptyHandler} style={{ border: '1px solid black' }}>
        empty이동
      </button>
      <button
        style={{
          border: '1px solid black',
          backgroundColor: 'yellow',
          margin: '10px',
        }}
        onClick={getNewTokenHandler}
      >
        토큰 갱신하기 버튼
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
        <div style={{ margin: '20px 0 20px 0' }}>
          <SignUp />
        </div>
      </div>

      <KakaoLogin loginClickHandler={loginClickHandler} />
    </S.LoginContainer>
  );
};

export default LoginForm;
