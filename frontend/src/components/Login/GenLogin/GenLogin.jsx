import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './GenLogin.style';

import { useForm } from 'react-hook-form';

import { apiLogin } from '../../../apis/apiLogin';

// 일반 로그인 컴포넌트

const GenLogin = () => {
  const [checkedLogin, setCheckedLogin] = useState(false);
  const [typeState, setTypeState] = useState(true); // 로그인 타입 상태

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' });

  const onValid = async () => {
    const loginData = watch();

    console.log('axios 직전->loginData:  ', loginData);
    await apiLogin
      .post(`/auth/login`, loginData)
      .then((res) => {
        console.log(' axios-> res : ', res);
        console.log('res.headers: ', res.headers);
        console.log(
          'res.headers.Accesstoken: ',
          res.headers.get('accesstoken'),
        );
        console.log(
          'res.headers.refreshtoken: ',
          res.headers.get('refreshtoken'),
        );
        console.log(
          'GenLogin에서 로그인 axios요청으로 오는 res -> : ',
          res.headers.accesstoken,
        );
        const accesstoken = res.headers.accesstoken.split(' ')[1];
        console.log('accesstoken : ', accesstoken);
        const refreshtoken = res.headers.refreshtoken;
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accesstoken}`;

        if (checkedLogin) {
          localStorage.setItem('accesstoken', accesstoken);
          localStorage.setItem('refreshtoken', refreshtoken);
          console.log(
            'localStorage에 넣어진 accesstoken : ',
            localStorage.getItem('accesstoken'),
          );
        } else if (!checkedLogin) {
          sessionStorage.setItem('accesstoken', accesstoken);
        }
        console.log('로그인 성공!');
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
          <S.NoUserType
            onClick={() => {
              setTypeState(!typeState);
            }}
          >
            회원 로그인
          </S.NoUserType>
        )}
        {!typeState ? (
          <S.AdminTypeLogin>관리자 로그인</S.AdminTypeLogin>
        ) : (
          <S.NoAdminType
            onClick={() => {
              setTypeState(!typeState);
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
            onChange={() => {
              setCheckedLogin(!checkedLogin);
            }}
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
