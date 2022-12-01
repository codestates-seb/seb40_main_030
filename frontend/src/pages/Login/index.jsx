import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { sendAuthCode } from '@/apis/auth';
import { getAuthCode } from '@/components/Login/utils';

import LoginForm from '../../components/Login/LoginForm';
import { loginState } from '../../recoil/login';
import * as S from './Login.style';

const Login = () => {
  // const isAuthorized = useRecoilValue(loginState);
  // const navigate = useNavigate();
  // const isLogin = () => {
  //   if (isAuthorized) {
  //     navigate('/');
  //   }
  // };

  // useEffect(() => {
  //   isLogin();
  // }, [isAuthorized]);

  return (
    <S.LoginPageWrapper>
      <LoginForm />
    </S.LoginPageWrapper>
  );
};

export default Login;

/**
 *
 * 1.로그인하면서 카카오서버로 id pw 보냄 - post [o]
 *  1-1. 응답으로 인증서버에서 auth code 받음 [o]
 * 2.백엔드서버로 auth code 보냄 - post [o]
 *  2-1. 백엔드에서 인증서버로 auth code + client id + client secret 보내고 토큰(엑세스 + 리프레쉬) 받음 [o]
 *  2-2. 받은 토큰(엑세스 + 리프레쉬)은 백엔드서버가 클라이언트로 응답으로 보내줌. [o]
 * 3.그외 api 통신할때 토큰 보냄 - post
 *  3-1. 토큰 기간 만료되면
 *
 * 토큰을 처음 받을떄 헤더 or 쿠키 or body 어디로 받을지 정해야함.
 * 요청시 토큰을 실어 보낼때도 헤더 or 쿠기 body 어디에 넣을지 정해야함.
 *
 */

/**
 * 첫페이지 접속 -> 로그인 o(가지고있는 토큰 있음?) -> 앱접속가능
 *            -> 로그인 x(가지고 있는 토큰 없음?) -> 토큰 발급 절차........->받은 인증코드(인가완료) 백으로 보내고 토큰받음(인증완료) -> 앱접속가능
 *
 * 카카오 엑세스 토큰 만료시간 6hour / 리프레쉬 토큰 만료시간 2달
 *
 *
 */
