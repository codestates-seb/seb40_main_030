import KakaoLogin from './KakaoLogin';
import * as S from '../../pages/Login/Login.style';
import useKakaoLogin from '../../hooks/Login/useKakaoLogin';
import { SplashScreen } from '../@commons';
import { renewTokenDirectly } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import GenLogin from './GenLogin';
import SignUp from './SignUp';
import { useRecoilState } from 'recoil';
import { accessTokenVal } from '../../recoil/login';
import axios from 'axios';
const LoginForm = () => {
  const { loginClickHandler, isAuthorized } = useKakaoLogin();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenVal);
  const navigate = useNavigate();
  console.log('login 페이지 렌더링');

  const getNewTokenHandler = async () => {
    const res = await axios.get('/login/renew');
    console.log(
      '토큰 갱신 버튼 누른후 응답은',
      res.data.access_token.access_token
    );
    setAccessToken(res.data.access_token.access_token);
  };
  const gobackHandler = () => {
    navigate('/entrance');
  };
  const goEmptyHandler = () => {
    navigate('/empty');
  };
  const goPrivateTestHandler = () => {
    navigate('/privatetest');
  };

  const testHandler = async (accessToken) => {
    //테스트 api 위한 임시 핸들러
    try {
      const res = await axios.get('/test', {
        headers: { Authorization: `Bearer ${accessToken}` }, //엑세스 토큰 헤더에 담아서 요청
      });
      console.log('테스트 api 요청의 응답은', res);
    } catch (error) {
      if (error.response?.statusText === 'Unauthorized') {
        console.log('엑세스 토큰이 없습니다. 재발급요망');
      }
    } finally {
      console.log('testHandler 실행완료');
    }
  };

  return (
    <S.LoginContainer>
      <button
        onClick={() => testHandler(accessToken)}
        style={{ border: '1px solid black' }}
      >
        test api 테스트
      </button>
      <button onClick={gobackHandler} style={{ border: '1px solid black' }}>
        뒤로 가기
      </button>
      <button onClick={goEmptyHandler} style={{ border: '1px solid black' }}>
        empty이동
      </button>
      <button
        onClick={goPrivateTestHandler}
        style={{ border: '1px solid black' }}
      >
        privatetest이동
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
        <div style={{ margin: '20px 0 20px 0' }}></div>
      </div>

      <KakaoLogin loginClickHandler={loginClickHandler} />
    </S.LoginContainer>
  );
};

export default LoginForm;
