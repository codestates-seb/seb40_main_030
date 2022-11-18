import LoginForm from '../../components/Login/LoginForm';
import * as S from './Login.style';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/login';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isAuthorized, setIsAuthorized] = useRecoilState(loginState);
  const navigate = useNavigate();

  return (
    <S.LoginPageWrapper>
      <LoginForm />
    </S.LoginPageWrapper>
  );
};

export default Login;
