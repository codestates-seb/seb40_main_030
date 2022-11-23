// 회원가입 컴포넌트

import axios from 'axios';
import { useEffect, useState } from 'react';
import { mockUser } from '../../../mocks/data';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUp.style';
// import {
//   HomeIcon,
//   SignUpContainer,
//   SignUpText,
//   SignUpTopContainer,
//   SignUpMidContainer,
//   SignUpPhoto,
//   SignUpEmailInputDiv,
//   SignUpPasswordInputDiv,
//   SignUpEmailSuccessMsgDiv,
//   SignUpEmailFailMsgDiv,
//   SignUpCheckPasswordInputDiv,
//   SignUpPasswordSuccessMsgDiv,
//   SignUpPasswordFailMsgDiv,
//   SignUpCheckPasswordSuccessMsgDiv,
//   SignUpCheckPasswordFailMsgDiv,
//   SignUpNickInputDiv,
//   SignUpNickSuccessMsgDiv,
//   SignUpNickFailMsgDiv,
//   SignUpPhoneInputDiv,
//   SignUpPhoneSuccessMsgDiv,
//   SignUpPhoneFailMsgDiv,
//   SignUpAddressContainer,
//   SignUpAddressInputDiv,
//   SignUpAddressInputAddDiv,
//   SignUpSubmitBtn,
//   SignUpBottomContainer,
// } from './SignUp.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// 해야할것
// 이미지 업로드 에디터, 폰 번호 적을때 라디오버튼같이 010,016, 등 선택할 수 있게! ,
// 주소 찾아서 입력할 api? 라이브러리 가져오기?
// 모든 상태값들을 post로 서버에 보내기 -> 응답으로는 정보들과 고유 id 같이 옴

const SignUp = () => {
  const navigate = useNavigate();
  const [signEmail, setSignEmail] = useState('');

  const [signPassword, setSignPassword] = useState('');
  const [signCheckPw, setSignCheckPw] = useState(''); //  비밀번호 재확인 상태

  const [signNick, setSignNick] = useState('');

  const [signPhone, setSignPhone] = useState('');

  const [signAddress, setSignAddress] = useState('');

  // ----------- 유효성검사 msg 상태값 ---------------
  const [emailMsg, setEmailMsg] = useState(''); // email 유효성검사 msg
  const [isEmail, setIsEmail] = useState(false);
  const [passwordMsg, setPasswordMsg] = useState(''); // 첫번째 비밀번호 유효성검사 msg
  const [checkPasswordMsg, setCheckPasswordMsg] = useState(''); // 두 비밀번호 일치 여부 유효성검사 msg
  const [isPassword, setIsPassword] = useState(false);
  const [nickMsg, setNickMsg] = useState(''); // 닉네임 유효성검사 msg
  const [isNick, setIsNick] = useState(false);
  const [phoneMsg, setPhoneMsg] = useState('');

  // 이메일 중복체크 유효성검사
  const checkedEmail = () => {
    if (!signEmail.includes('@') || !signEmail.includes('.')) {
      setEmailMsg('email형식에 맞지 않습니다.');
    } else {
      axios
        .get('/api/members')
        .then((res) => {
          let isEmail = res.data.filter((user) => {
            return user.email === signEmail;
          });
          if (isEmail.length === 1) {
            console.log(mockUser); // 회원가입하고 mock유저에
            setEmailMsg('이미 가입된 email입니다.');
          } else {
            setEmailMsg('사용 가능 email입니다.');
            setIsEmail(true);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  };

  // 닉네임 중복체크 유효성검사
  const checkedNick = () => {
    if (signNick.length <= 2) {
      setNickMsg('3글자 이상의 닉네임을 사용하세요.');
    } else {
      axios.get('/api/members').then((res) => {
        let isNick = res.data.filter((user) => {
          return user.nickName === signNick;
        });
        if (isNick.length === 1) {
          setNickMsg('중복된 닉네임입니다.');
        } else {
          setNickMsg('사용가능 닉네임.');
          setIsNick(true);
        }
      });
    }
  };

  const validPasswordMsg = () => {
    if (signPassword.length < 8 || signPassword.length > 15) {
      setPasswordMsg('비밀번호 길이는 8 ~ 15사이로 해주세요.');
    } else {
      setPasswordMsg('적합한 비밀번호.');
      if (signCheckPw !== signPassword) {
        setCheckPasswordMsg('비밀번호 일치하지 않음.');
      } else {
        setCheckPasswordMsg('비밀번호 일치함.');
        setIsPassword(true);
      }
    }
  };

  // 폰번호 입력란에 숫자만 쓸수 있게 유효성검사함수
  const phoneVaildMsg = (e) => {
    if (Number(signPhone) || signPhone === '') {
      setPhoneMsg('');
    } else if (!Number(signPhone)) {
      setPhoneMsg('입력: 숫자만 - 생략');
    }
  };

  // 회원가입 submit버튼 눌렀을때!
  const signUpSubmit = async () => {
    checkedEmail();
    checkedNick();
    const user = {
      email: signEmail,
      password: signPassword,
      phone: signPhone,
      nickName: signNick,
      address: signAddress,
      photoUrl: 'url',
      createdAt: new Date(),
      modifiedAt: new Date(),
    };
    console.log('회원가입버튼함수 내부 user : ', user);

    if (isEmail && isNick) {
      await axios.post('/api/members', user).then((res) => {
        navigate('/login');
        console.log('회원가입버튼 누르고 axios 요청-> 응답 -> : ', res.data);
      });
    }
    console.log(mockUser);
  };

  return (
    <S.SignUpContainer>
      <S.SignUpTopContainer>
        <S.HomeIcon>
          <FontAwesomeIcon icon={faArrowLeft} />
        </S.HomeIcon>
        <S.SignUpText>회원가입</S.SignUpText>
      </S.SignUpTopContainer>
      <S.SignUpMidContainer>
        <S.SignUpPhoto>
          <input type='file' />
        </S.SignUpPhoto>
        <S.SignUpEmailInputDiv>
          <input
            type='text'
            value={signEmail}
            onChange={(e) => {
              setSignEmail(e.target.value);
            }}
            placeholder='Email'
          />
          <button onClick={checkedEmail}>중복확인</button>
        </S.SignUpEmailInputDiv>
        {emailMsg === '사용 가능 email입니다.' ? (
          <S.SignUpEmailSuccessMsgDiv>{emailMsg}</S.SignUpEmailSuccessMsgDiv>
        ) : (
          <S.SignUpEmailFailMsgDiv>{emailMsg}</S.SignUpEmailFailMsgDiv>
        )}
        <S.SignUpPasswordInputDiv>
          <input
            type='text'
            value={signPassword}
            onChange={(e) => {
              setSignPassword(e.target.value);
            }}
            onKeyUp={validPasswordMsg}
            placeholder='비밀번호(9~15자)'
          />
        </S.SignUpPasswordInputDiv>
        {passwordMsg === '적합한 비밀번호.' ? (
          <S.SignUpPasswordSuccessMsgDiv>
            {passwordMsg}
          </S.SignUpPasswordSuccessMsgDiv>
        ) : (
          <S.SignUpPasswordFailMsgDiv>{passwordMsg}</S.SignUpPasswordFailMsgDiv>
        )}
        <S.SignUpCheckPasswordInputDiv>
          <input
            type='text'
            value={signCheckPw}
            onChange={(e) => {
              setSignCheckPw(e.target.value);
            }}
            onKeyUp={validPasswordMsg}
            placeholder='비밀번호 재확인'
          />
        </S.SignUpCheckPasswordInputDiv>
        {checkPasswordMsg === '비밀번호 일치함.' ? (
          <S.SignUpCheckPasswordSuccessMsgDiv>
            {checkPasswordMsg}
          </S.SignUpCheckPasswordSuccessMsgDiv>
        ) : (
          <S.SignUpCheckPasswordFailMsgDiv>
            {checkPasswordMsg}
          </S.SignUpCheckPasswordFailMsgDiv>
        )}
        <S.SignUpNickInputDiv>
          <input
            type='text'
            value={signNick}
            onChange={(e) => {
              setSignNick(e.target.value);
            }}
            placeholder='닉네임을 입력하세요'
          />
          <button onClick={checkedNick}>중복확인</button>
        </S.SignUpNickInputDiv>
        {nickMsg === '사용가능 닉네임.' ? (
          <S.SignUpNickSuccessMsgDiv>{nickMsg}</S.SignUpNickSuccessMsgDiv>
        ) : (
          <S.SignUpNickFailMsgDiv>{nickMsg}</S.SignUpNickFailMsgDiv>
        )}
        <S.SignUpPhoneInputDiv>
          <input
            type='text'
            value={signPhone}
            onChange={(e) => {
              setSignPhone(e.target.value);
            }}
            onKeyUp={phoneVaildMsg}
            placeholder='Phone Number (- 생략)'
          />
        </S.SignUpPhoneInputDiv>
        {phoneMsg === '' ? (
          <S.SignUpPhoneSuccessMsgDiv>{phoneMsg}</S.SignUpPhoneSuccessMsgDiv>
        ) : (
          <S.SignUpPhoneFailMsgDiv>{phoneMsg}</S.SignUpPhoneFailMsgDiv>
        )}
        <S.SignUpAddressContainer>
          <S.SignUpAddressInputDiv>
            <input
              type='text'
              value={signAddress}
              onChange={(e) => {
                setSignAddress(e.target.value);
              }}
              placeholder='Address'
            />
            <button>주소찾기</button>
          </S.SignUpAddressInputDiv>
          <S.SignUpAddressInputAddDiv>
            <input type='text' placeholder='상세주소 입력' />
          </S.SignUpAddressInputAddDiv>
        </S.SignUpAddressContainer>
      </S.SignUpMidContainer>
      <S.SignUpBottomContainer>
        <S.SignUpSubmitBtn onClick={signUpSubmit}>
          회원가입 완료
        </S.SignUpSubmitBtn>
      </S.SignUpBottomContainer>
    </S.SignUpContainer>
  );
};

export default SignUp;
