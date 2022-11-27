import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginBtn,
  SearchAndSignUpDiv,
  SignUpDiv,
  FailMsgDiv,
  LoginMidContainer,
  EmailInputDiv,
  PasswordInputDiv,
  LoginTypeDiv,
  UserTypeLogin,
  AdminTypeLogin,
  CheckBoxDiv,
  CheckBoxText,
  SearchIdText,
  SearchPasswordText,
  EmailFailMsgDiv,
} from './GenLogin.style';
import { userInfoState, userMemberId } from '../../../recoil/userInfoState';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
// 일반 로그인 컴포넌트

const GenLogin = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [checkedLogin, setCheckedLogin] = useState(false);
  // const [failMsg, setFailMsg] = useState('');

  const [userId, setUserId] = useRecoilState(userMemberId);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' });

  console.log('최상단 Genlogin-> recoil  userId :', userId);

  const onValid = () => {
    const loginData = watch();
    const loginConfig = {
      withCredentials: true,
      crossDomain: true,
      credentials: 'include',
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
        // loginData,
        loginData,
        loginConfig,
      )
      .then((res) => {
        // const accesstoken = res.headers.accesstoken.split(' ')[1];
        // console.log('accesstoken :', accesstoken);
        // console.log(res.headers.get('content-type'));
        console.log('/genlogin post요청으로 받아온 res.data : ', res.data);
        console.log('headers: ', res.headers);
        console.log('headers.accesstoken: ', res.headers.accesstoken);
        console.log('headers.refreshtoken: ', res.headers.refreshtoken);

        // const accessToken = res.headers.AccessToken;
        // res.headers.Athoafasfap.split(' ')[1];

        // 마이페이지를 위한 유저정보를 일단 recoil로 담아둠
        // -> 하지만 유저정보도 서버로부터 memberid만 있으면 가져올 수 있기에
        // memberId만 따로 전역상태로 관리하던가 or useParams() 사용하든 하면됨.
        // 자주 쓰이는 애들이면 전역상태저장 하는게 더 좋음!

        // console.log(
        //   'Genlogin-> 로그인-> 응답 -> res.data.body[0].memberId : ',
        //   res.data.body[0].memberId,
        // );
        // setUserId(res.data.body[0].memberId);
        // console.log('GenLogin에서 로그인 axios요청으로 오는 res -> : ', res);
        // if (checkedLogin) {
        //   localStorage.setItem('accesstoken', accessToken); // 로컬스토리지에 accesstoken 저장
        //   localStorage.setItem('refreshtoken', refreshtoken);

        //   console.log(
        //     'localStorage에 넣어진 access_token : ',
        //     localStorage.getItem('accesstoken'),
        //   );
        // }
        // console.log('recoil userInfo의 값 : ', userInfo); // 여기서는 안읽힘. 이 함수가 끝나고 나서야 나중에 전역상태로 저장!
        // navigate('/'); // 잠시 주석처리!
        // console.log('로그인 성공!');
      })
      .catch((err) => {
        console.log('Genlogin-> 로그인 실패시 err :  ', err);
        // location.reload();
      });
  };
  const onInValid = (data) => {
    console.log('err : ', data);
  };

  return (
    <LoginMidContainer>
      <LoginTypeDiv>
        <UserTypeLogin>회원 로그인</UserTypeLogin>
        <AdminTypeLogin>관리자 로그인</AdminTypeLogin>
      </LoginTypeDiv>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <EmailInputDiv>
          <input
            type='text'
            name='email'
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            placeholder='이메일을 입력하세요.'
            {...register('email', {
              required: 'E-mail을 입력해주세요.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                message: '⚠ E-mail형식에 맞지 않습니다.',
              },
            })}
          />
        </EmailInputDiv>
        {errors.email?.message && (
          <EmailFailMsgDiv>{errors.email?.message}</EmailFailMsgDiv>
        )}
        <PasswordInputDiv>
          <input
            type='password' // 추후에 type='password' 로 바꿀 예정
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
            name='password'
            placeholder='비밀번호를 입력하세요.'
            {...register('password', {
              required: 'password를 입력해주세요.',
            })}
          />
        </PasswordInputDiv>
        {errors.password?.message && (
          <EmailFailMsgDiv>{errors.password?.message}</EmailFailMsgDiv>
        )}
        <CheckBoxDiv>
          <input
            type='checkbox'
            checked={checkedLogin}
            onChange={() => {
              setCheckedLogin(!checkedLogin);
            }}
          />
          <CheckBoxText>로그인 유지</CheckBoxText>
        </CheckBoxDiv>
        <div>
          <LoginBtn type='submit'>로그인</LoginBtn>
        </div>
      </form>
      <SearchAndSignUpDiv>
        <SearchIdText>아이디 찾기</SearchIdText>
        <SearchPasswordText>비밀번호 찾기</SearchPasswordText>
        <SignUpDiv to={'/signup'}>회원가입</SignUpDiv>
      </SearchAndSignUpDiv>
    </LoginMidContainer>
  );
};

export default GenLogin;
