import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {
//   LoginBtn,
//   SearchAndSignUpDiv,
//   SignUpDiv,
//   FailMsgDiv,
//   LoginMidContainer,
//   EmailInputDiv,
//   PasswordInputDiv,
//   LoginTypeDiv,
//   UserTypeLogin,
//   AdminTypeLogin,
//   CheckBoxDiv,
//   CheckBoxText,
//   SearchIdText,
//   SearchPasswordText,
//   EmailFailMsgDiv,
//   NoAdminType,
//   NoUserType,
//   AdminEmailInputDiv,
//   AdminPasswordInputDiv,
// } from './GenLogin.style';
import * as S from './GenLogin.style';
import { userInfoState, userMemberId } from '../../../recoil/userInfoState';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';

// 일반 로그인 컴포넌트

const GenLogin = () => {
  const [checkedLogin, setCheckedLogin] = useState(false);
  const [typeState, setTypeState] = useState(true); // 로그인 타입 상태

  const [userId, setUserId] = useRecoilState(userMemberId);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' });

  const onValid = () => {
    const loginData = watch();
    const loginConfig = {
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'ngrok-skip-browser-warning': '111',
        'Content-Type': 'application/json',
      },
    };
    console.log('axios 직전->loginData:  ', loginData);
    axios
      .post(
        'https://5e7b-222-233-138-154.jp.ngrok.io/auth/login',
        loginData,
        loginConfig,
      )
      .then((res) => {
        console.log(' axios-> res : ', res);
        // console.log('res.headers: ', res.headers);
        // console.log('res.headers.Accesstoken: ', res.headers.Accesstoken);
        // console.log('res.headers.refreshtoken: ', res.headers.refreshtoken);
        // const accesstoken = res.headers.Accesstoken.split(' ')[1];
        // const refreshtoken = res.headers.refreshtoken;
        // axios.defaults.headers.common['headers'] = `Bearer ${accesstoken}`;
        // console.log(
        //   'Genlogin-> 로그인-> 응답 -> res.data.body[0].memberId : ',
        //   res.data.body[0].memberId,
        // );
        // setUserId(res.data.body[0].memberId); // userId 전역상태에 저장!
        // console.log('GenLogin에서 로그인 axios요청으로 오는 res -> : ', res);
        // if (checkedLogin) {
        //   localStorage.setItem('accesstoken', accesstoken); // 로컬스토리지에 accesstoken 저장
        //   localStorage.setItem('refreshtoken', refreshtoken);
        //   console.log(
        //     'localStorage에 넣어진 accesstoken : ',
        //     localStorage.getItem('accesstoken'),
        //   );
        // }
        // console.log('로그인 성공!');
        // navigate('/');
      })
      .catch((err) => {
        console.log('Genlogin-> 로그인 실패시 err :  ', err);
        alert('로그인 실패.');
        // location.reload(); // 새로고침! 할지말지 아직 고민중.
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
