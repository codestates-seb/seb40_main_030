import axios from 'axios';
import { useState } from 'react';
import { mockUser } from '../../mocks/data';
import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
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
  const checkedEmail = (e) => {
    e.preventDefault();
    if (!signEmail.includes('@') || !signEmail.includes('.')) {
      // setEmailMsg('⚠ email형식에 맞지 않습니다.');
    } else {
      axios
        .get('/api/members')
        .then((res) => {
          console.log('SignUp-> eamil중복확인-> res.data : ', res.data);

          let isEmail = res.data.find((user) => user.email === signEmail);

          console.log('isEmail: ', isEmail);
          if (isEmail) {
            setEmailMsg('⚠ 이미 가입된 email입니다.');
            setIsEmail(false);
          } else {
            setEmailMsg('사용 가능 email입니다.');
            setIsEmail(true);
          }
        })
        .catch((err) => {
          console.log('에러: ', err);
        });
    }
  };

  // 닉네임 중복체크 유효성검사
  const checkedNick = () => {
    if (signNick.length <= 2) {
      setNickMsg('⚠ 3글자 이상의 닉네임을 사용하세요.');
    } else {
      axios.get('/api/members').then((res) => {
        let isNick = res.data.find((user) => {
          return user.nickName === signNick;
        });
        if (isNick) {
          setNickMsg('⚠ 중복된 닉네임입니다.');
          setIsNick(false);
        } else {
          setNickMsg('사용가능 닉네임.');
          setIsNick(true);
        }
      });
    }
  };

  const validPasswordMsg = () => {
    if (signPassword.length === 0) {
      setIsPassword(false);
      setPasswordMsg('⚠ 비밀번호 입력하세요.');
    }
    if (signPassword.length !== 0 && signCheckPw.length === 0) {
      setIsPassword(false);
      setCheckPasswordMsg('⚠ 재확인 비밀번호 입력하세요.');
    }
    if (signPassword.length < 8 || signPassword.length > 15) {
      setIsPassword(false);
      setPasswordMsg('⚠ 비밀번호 길이는 8 ~ 15사이로 해주세요.');
    } else {
      setPasswordMsg('적합한 비밀번호.');
      if (signCheckPw.length === 0) {
        setIsPassword(false);
        setCheckPasswordMsg('⚠ 재확인 비밀번호 입력하세요.');
      } else if (signCheckPw !== signPassword) {
        setIsPassword(false);
        setCheckPasswordMsg('⚠ 비밀번호 일치하지 않음.');
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
      setPhoneMsg('⚠ 입력: 숫자만 - 생략');
    }
  };
  const signUpSubmit = async (e) => {
    e.preventDefault(); // submit 할 때 페이지 자체가 새로고침하는걸 막음.
    console.log('submit 눌렀을때 : ', signEmail);
    checkedEmail();
    checkedNick();
    validPasswordMsg();
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

    if (isEmail && isNick && isPassword) {
      await axios.post('/api/members', user).then((res) => {
        navigate('/login');
        console.log('회원가입버튼 누르고 axios 요청-> 응답 -> : ', res.data);
      });
    }
  };

  return {
    checkedEmail,
    checkedNick,
    validPasswordMsg,
    phoneVaildMsg,
    signEmail,
    setSignEmail,
    signPassword,
    setSignPassword,
    signCheckPw,
    setSignCheckPw,
    signNick,
    setSignNick,
    signPhone,
    setSignPhone,
    signAddress,
    setSignAddress,
    emailMsg,
    passwordMsg,
    checkPasswordMsg,
    nickMsg,
    phoneMsg,
    signUpSubmit,
  };
};

export default useSignUp;
