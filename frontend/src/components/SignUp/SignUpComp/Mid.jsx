import { useState } from 'react';
import useSignUp from '../../../hooks/SignUp/useSignUp';
import * as S from './Mid.style';
import { mockUser } from '../../../mocks/data';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ExistBtn from './ExistBtn';
import { useRecoilState } from 'recoil';
import { userInfoState, userMemberId } from '../../../recoil/userInfoState';

const SignUpMid = () => {
  const [signEmail, setSignEmail] = useRecoilState(userInfoState);

  // setUserInfo((prev) => {
  //   const userInfo = { ...prev };
  //   userInfo.email = info.email;
  //   userInfo.nickname = info.nickname;
  //   userInfo.phone = info.phone;
  //   userInfo.address = info.address;
  //   userInfo.photourl = info.photourl;

  //   return { ...userInfo };
  // });

  const {
    checkedEmail,
    checkedNick,
    phoneVaildMsg,
    // signEmail,
    // setSignEmail,
    signNick,
    setSignNick,
    signPhone,
    setSignPhone,
    signAddress,
    setSignAddress,
    emailMsg,
    nickMsg,
    phoneMsg,
    signPassword,
    setSignPassword,
    signCheckPw,
    setSignCheckPw,
    passwordMsg,
    checkPasswordMsg,
    validPasswordMsg,
    signUpSubmit,
  } = useSignUp();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onChange' }); // 제출버튼 누른적없어도 input value가 바뀔때마다 ->
  // -> 바로바로 유효성 errors 메시지를 화면에 출력할 수 있음 <- onchange 모드 설정을 안해주면 한번 제출버튼을 누르고 나서야 에러메시지가 화면에 바뀔때마다 출력댐

  // const validatePw = (value) => {
  //   if (value.length < 6) {
  //     return '6보다 크게 입력바람';
  //   }
  //   return true;
  // };

  // console.log(watch()); // watch()를 사용하여 인자와(watch('eamil')) name이 일치하거나 watch() -> 객체형태의  input value값을 알 수 있다.
  const onValid = async (data) => {
    return new Promise((r) =>
      setTimeout(() => {
        console.log('setTimeout data: ', data);
        axios.post('/api/members', data).then((res) => {
          console.log('setTimeout-> axios-> res.data', res.data);
        });
      }, 2000),
    );
  };
  const onInValid = (data) => {
    console.log('onInValid : ', data);
  };
  return (
    <div>
      <form>
        <S.SignUpMidContainer>
          <S.SignUpPhoto>
            <input type='file' />
          </S.SignUpPhoto>
          <S.SignUpEmailInputDiv>
            <input
              type='email'
              name='email'
              placeholder='Email'
              {...register('email', {
                required: '⚠ email 필수',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                  message: '⚠ email형식에 맞춰 입력하세요.',
                },
              })}
            />
            <ExistBtn email={watch().email} />
            {/* 중복확인버튼 누를때 email형식에 맞게 썻을때만 실행되게끔!  */}
          </S.SignUpEmailInputDiv>
          {errors && (
            <S.SignUpEmailFailMsgDiv>
              {errors.email?.message}
            </S.SignUpEmailFailMsgDiv>
          )}
          {!errors && emailMsg === 'v 사용 가능 email입니다.' ? (
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
            <S.SignUpPasswordFailMsgDiv>
              {passwordMsg}
            </S.SignUpPasswordFailMsgDiv>
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
      </form>
      {/* <form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.SignUpEmailInputDiv>
          <input
            type='email'
            name='email'
            {...register('email', {
              required: 'email은 필수 입력값 입니다.',
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                message: 'email형식으로 입력하시오.',
              },
            })}
          />
        </S.SignUpEmailInputDiv>
        {errors.email?.message}
        <div>
          <input
            type='text'
            name='nickname'
            placeholder='nickname'
            {...register('nickname', {
              required: 'name은 필수 입력값 입니다.', // 아무것도 안넣었을때 나오는값 필수값!
              minLength: {
                value: 5,
                message: '5글자 이상', // 뭐라도 넣긴했는데 유효성에 안맞을때 나오는 값! 에러메시지!
              },
              maxLength: {
                value: 10,
                message: '10글자 이하',
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                message: '8자이상, 문자, 숫자 및 특수문자 포함!',
              },
            })}
          />
          {console.log('errors : ', errors.username?.message)}
          {errors.username?.message}
        </div>
        <div>
          <input
            type='text'
            name='phone'
            placeholder='phone...'
            {...register('phone', {
              required: 'phone 필수',
              pattern: {
                value: /^\d{3}\d{3,4}\d{4}$/,
                message: '- 생략 phone Number 형식으로 입력하세요.',
              },
            })}
          />
          {errors.phone?.message}
        </div>
        <div>
          <input
            type='file'
            name='photoURL'
            placeholder='사진'
            {...register('photoURL')}
          />
          {/* {console.log(watch().img)} */}
      {/* </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='password...'
            {...register('password', {
              required: '비밀번호 필수',
              pattern: {
                value:
                  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                message:
                  '특수문자 / 문자 / 숫자 포함 형태의 8~15자리 입력하세요.',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button type='submit' disabled={isSubmitting}>
            제출
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default SignUpMid;
