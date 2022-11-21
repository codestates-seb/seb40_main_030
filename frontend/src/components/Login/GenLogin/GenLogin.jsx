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
} from './GenLogin.style';
import { userInfoState, userMemberId } from '../../../recoil/userInfoState';
import { useRecoilState } from 'recoil';
// 일반 로그인 컴포넌트

const GenLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkedLogin, setCheckedLogin] = useState(false);
  const [failMsg, setFailMsg] = useState('');
  // const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [userId, setUserId] = useRecoilState(userMemberId);
  const navigate = useNavigate();
  console.log('최상단 Genlogin-> recoil  userId :', userId);
  // Email value값 변경 함수
  const changeInputEmail = (e) => {
    setEmail(e.target.value);
  };
  // Password  value값 변경 함수
  const changeInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickGenLogin = () => {
    const loginData = { email, password };
    const loginConfig = {
      withCredentials: true,
    };

    if (email.length === 0 && password.length === 0) {
      setFailMsg('email과 password를 입력해주세요.');
    } else if (email.length === 0) {
      setFailMsg('email을 입력해주세요.');
    } else if (!email.includes('@') || !email.includes('.')) {
      setFailMsg('email형식이 올바르지 않습니다.');
    } else if (password.length === 0) {
      setFailMsg('password를 입력해주세요.');
    } else {
      setFailMsg(''); // 어차피 로그인되면 이 메시지 못봄 그냥 일단 써둠!
      axios
        .post('/genlogin', loginData, loginConfig)
        .then((res) => {
          console.log('/genlogin post요청으로 받아온 res.data : ', res.data);
          const accessToken = res.data.accesstoken;

          // 마이페이지를 위한 유저정보를 일단 recoil로 담아둠
          // -> 하지만 유저정보도 서버로부터 memberid만 있으면 가져올 수 있기에
          // memberId만 따로 전역상태로 관리하던가 or useParams() 사용하든 하면됨.
          // const info = res.data.body[0];
          // setUserInfo((prev) => {
          //   const userInfo = { ...prev };
          //   userInfo.email = info.email;
          //   userInfo.nickname = info.nickname;
          //   userInfo.phone = info.phone;
          //   userInfo.address = info.address;
          //   userInfo.photourl = info.photourl;

          //   return { ...userInfo };
          // });
          console.log(
            'Genlogin-> 로그인-> 응답 -> res.data.body[0].memberId : ',
            res.data.body[0].memberId
          );
          setUserId(res.data.body[0].memberId);
          console.log('GenLogin에서 로그인 axios요청으로 오는 res -> : ', res);
          if (checkedLogin) {
            localStorage.setItem('accesstoken', accessToken); // 로컬스토리지에 accesstoken 저장
            localStorage.setItem('refreshtoken', refreshtoken);
            console.log(
              'localStorage에 넣어진 access_token : ',
              localStorage.getItem('accesstoken')
            );
          }
          console.log('recoil userInfo의 값 : ', userInfo); // 여기서는 안읽힘. 이 함수가 끝나고 나서야 나중에 전역상태로 저장!
          navigate('/'); // 잠시 주석처리!
          console.log('로그인 성공!');
        })
        .catch((err) => {
          console.log(
            'Genlogin-> 로그인 실패시 err.response.data :  ',
            err.response.data
          );
          setFailMsg(err.response.data);

          // location.reload();
        });
    }
  };

  return (
    <LoginMidContainer>
      <LoginTypeDiv>
        <UserTypeLogin>회원 로그인</UserTypeLogin>
        <AdminTypeLogin>관리자 로그인</AdminTypeLogin>
      </LoginTypeDiv>
      <EmailInputDiv>
        <input
          type='text'
          value={email}
          onChange={changeInputEmail}
          placeholder='이메일을 입력하세요.'
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <input
          type='text' // 추후에 type='password' 로 바꿀 예정
          value={password}
          onChange={changeInputPassword}
          placeholder='비밀번호를 입력하세요.'
        />
      </PasswordInputDiv>
      <div>{failMsg ? <FailMsgDiv>{failMsg}</FailMsgDiv> : ''}</div>
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
        <LoginBtn onClick={onClickGenLogin}>로그인</LoginBtn>
      </div>
      <SearchAndSignUpDiv>
        <SearchIdText>아이디 찾기</SearchIdText>
        <SearchPasswordText>비밀번호 찾기</SearchPasswordText>
        <SignUpDiv to={'/signup'}>회원가입</SignUpDiv>
      </SearchAndSignUpDiv>
    </LoginMidContainer>
  );
};

export default GenLogin;
