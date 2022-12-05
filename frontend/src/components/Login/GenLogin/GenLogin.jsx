import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { recoilPostAddress } from '../../../recoil/userInfoState';
import { loginCheckState } from '../../../recoil/login';

import { axiosAdminInstance } from '@/apis/admin';
import { setUserLogin, setAdminLogin } from '../../../apis/apiLogin';
import { apiNotToken } from '../../../apis/api';

import * as S from './GenLogin.style';

const GenLogin = () => {
  const [postAddress, setPostAddress] = useRecoilState(recoilPostAddress);
  const [typeState, setTypeState] = useState(true);
  const [checkedLogin, setCheckedLogin] = useRecoilState(loginCheckState);

  const navigate = useNavigate();

  useEffect(() => {
    setPostAddress('');
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onValid = async () => {
    const loginData = watch();
    await apiNotToken
      .post(`/auth/login`, loginData)
      .then((res) => {
        const accesstoken = res.headers.accesstoken.split(' ')[1];
        const refreshtoken = res.headers.refreshtoken;

        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accesstoken}`;

        axiosAdminInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accesstoken}`;

        if (res.data === 'Success ADMIN') {
          setAdminLogin(accesstoken, checkedLogin, refreshtoken);
          console.log('setAdminLogin 함수 실행!');
        } else {
          setUserLogin(accesstoken, checkedLogin, refreshtoken);
          console.log('setUserLogin 함수 실행!');
        }
        navigate('/');
      })
      .catch((err) => {
        console.log('Genlogin-> 로그인 실패시 err :  ', err);
        alert('로그인 실패.');
      });
  };
  const onInValid = (data) => {
    console.log('err : ', data);
    alert('E-mail 또는 password가 올바르지 않습니다.');
  };

  return (
    <S.LoginMidContainer>
      <S.LoginTypeDiv>
        {typeState ? (
          <S.UserTypeLogin>회원 로그인</S.UserTypeLogin>
        ) : (
          <S.NoUserType onClick={() => setTypeState(!typeState)}>
            회원 로그인
          </S.NoUserType>
        )}
        {!typeState ? (
          <S.AdminTypeLogin>관리자 로그인</S.AdminTypeLogin>
        ) : (
          <S.NoAdminType
            onClick={() => {
              setTypeState(!typeState);
              if (
                confirm(
                  `승인받은 E-Mail로만 로그인 가능합니다. \n관리자 등록하시겠습니까?\n`,
                )
              ) {
                navigate('/adminsignup');
              }
            }}
          >
            관리자 로그인
          </S.NoAdminType>
        )}
      </S.LoginTypeDiv>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        {!typeState ? (
          <S.AdminEmailInputDiv>
            <input
              type='text'
              name='email'
              placeholder='E-mail'
              {...register('email', {
                required: 'E-mail을 입력해주세요.',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                  message: '⚠ E-mail형식에 맞지 않습니다.',
                },
              })}
            />
          </S.AdminEmailInputDiv>
        ) : (
          <S.EmailInputDiv>
            <input
              type='text'
              name='email'
              placeholder='E-mail'
              {...register('email', {
                required: 'E-mail을 입력해주세요.',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                  message: '⚠ E-mail형식에 맞지 않습니다.',
                },
              })}
            />
          </S.EmailInputDiv>
        )}
        {errors.email?.message && (
          <S.EmailFailMsgDiv>{errors.email?.message}</S.EmailFailMsgDiv>
        )}
        {!typeState ? (
          <S.AdminPasswordInputDiv>
            <input
              type='password'
              name='password'
              placeholder='Password'
              {...register('password', {
                required: 'password를 입력해주세요.',
              })}
            />
          </S.AdminPasswordInputDiv>
        ) : (
          <S.PasswordInputDiv>
            <input
              type='password'
              name='password'
              placeholder='Password'
              {...register('password', {
                required: 'password를 입력해주세요.',
              })}
            />
          </S.PasswordInputDiv>
        )}
        {errors.password?.message && (
          <S.EmailFailMsgDiv>{errors.password?.message}</S.EmailFailMsgDiv>
        )}
        <S.CheckBoxDiv>
          <input
            type='checkbox'
            checked={checkedLogin}
            onChange={() => setCheckedLogin(!checkedLogin)}
          />
          <S.CheckBoxText>로그인 유지</S.CheckBoxText>
        </S.CheckBoxDiv>
        <div>
          <S.LoginBtn type='submit'>로그인</S.LoginBtn>
        </div>
      </form>
      <S.SearchAndSignUpDiv>
        <S.SearchIdText>아이디 찾기</S.SearchIdText>
        <S.SearchPasswordText>비밀번호 찾기</S.SearchPasswordText>
        <S.SignUpDiv to={'/signup'}>회원가입</S.SignUpDiv>
      </S.SearchAndSignUpDiv>
    </S.LoginMidContainer>
  );
};

export default GenLogin;
