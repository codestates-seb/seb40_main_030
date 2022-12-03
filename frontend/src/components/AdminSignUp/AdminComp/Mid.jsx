import * as S from './Mid.style';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { isOverLapEmail } from '../../../recoil/userInfoState';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_NGROK;

const Mid = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useRecoilState(isOverLapEmail);
  const [emailMsg, setEmailMsg] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
  });

  const checkedEmail = () => {
    if (!watch('email')) {
      alert('E-mail을 입력해주세요.');
    } else {
      axios
        .get(`${apiUrl}/admins`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
          },
        })
        .then((res) => {
          let existEmail = res.data.content.find(
            (user) => user.email === watch('email'),
          );
          if (existEmail) {
            setEmailMsg('⚠ 이미 가입된 E-mail입니다.');
            setIsEmail(false);
          } else {
            setEmailMsg('✅ 사용 가능 E-mail입니다.');
            setIsEmail(true);
          }
        })
        .catch((err) => {
          console.log('Mid/checkedEmail함수내부->axios 에러 err: ', err);
        });
    }
  };
  const onValid = (data) => {
    console.log('submit->data : ', data);
    checkedEmail();
    if (
      isEmail &&
      !errors.password?.message &&
      watch('password') === watch('checkpassword')
    ) {
      delete data.checkpassword;
      console.log('delete후 data : ', data);
      axios
        .post(`${apiUrl}/admins`, data, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
          },
        })
        .then((res) => {
          console.log('관리자 등록 성공!');
          setIsEmail(false);
          navigate(-1);
        })
        .catch((err) => {
          alert(`승인되지 않은 E-Mail입니다.\n☎️ 서비스센터 문의.`);
          console.log('err : ', err);
        });
    }
  };
  const onInValid = (data) => {
    alert('입력폼이 바르지 않습니다.');
    console.log('onInValid err : ', data);
  };

  return (
    <div>
      <S.AdminMidContainer>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
          <S.SignUpMidContainer>
            <S.SignUpEmailInputDiv>
              <input
                type='email'
                name='email'
                placeholder='승인된 이메일을 입력하세요.'
                {...register('email', {
                  required: '⚠ 승인된 E-Mail을 입력하세요.',
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
                    message: '⚠ 승인된 E-Mail을 입력하세요.',
                  },
                })}
              />
              {!watch('email') ? (
                <button
                  style={{ backgroundColor: '#d6d9dc' }}
                  type='button'
                  disabled
                >
                  중복확인
                </button>
              ) : (
                <button type='button' onClick={checkedEmail}>
                  중복확인
                </button>
              )}
            </S.SignUpEmailInputDiv>
            {errors.email?.message && (
              <S.SignUpEmailFailMsgDiv>
                {errors.email?.message}
              </S.SignUpEmailFailMsgDiv>
            )}
            {isEmail ? (
              <S.SignUpEmailSuccessMsgDiv>
                {emailMsg}
              </S.SignUpEmailSuccessMsgDiv>
            ) : (
              <S.SignUpEmailFailMsgDiv>{emailMsg}</S.SignUpEmailFailMsgDiv>
            )}
            <S.SignUpPasswordInputDiv>
              <input
                type='password'
                name='password'
                placeholder='비밀번호'
                {...register('password', {
                  required: '⚠ 비밀번호 입력',
                  pattern: {
                    value:
                      /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                    message:
                      '⚠ 특수문자 / 문자 / 숫자 포함 8~20자리 입력하세요.',
                  },
                })}
              />
            </S.SignUpPasswordInputDiv>
            {errors.password?.message && (
              <S.SignUpPasswordFailMsgDiv>
                {errors.password?.message}
              </S.SignUpPasswordFailMsgDiv>
            )}
            <S.SignUpCheckPasswordInputDiv>
              <input
                type='password'
                name='checkpassword'
                placeholder='비밀번호 확인'
                {...register('checkpassword', {
                  required: '⚠ 비밀번호 확인',
                })}
              />
            </S.SignUpCheckPasswordInputDiv>
            {!errors.checkpassword?.message &&
              watch('password') !== watch('checkpassword') &&
              watch('checkpassword') && (
                <S.SignUpCheckPasswordFailMsgDiv>
                  ⚠ 일치하지 않음
                </S.SignUpCheckPasswordFailMsgDiv>
              )}
            <S.SignUpPhoneInputDiv>
              <input
                type='text'
                name='phone'
                placeholder='휴대폰번호(- 생략)'
                {...register('phone', {
                  required: '⚠ 휴대폰번호 입력',
                  // pattern: {
                  //   value: /^\d{3}\d{3,4}\d{4}$/,
                  //   message: '⚠ 숫자만 입력하세요.',
                  // },
                })}
              />
            </S.SignUpPhoneInputDiv>
            {errors.phone?.message && (
              <S.SignUpPhoneFailMsgDiv>
                {errors.phone?.message}
              </S.SignUpPhoneFailMsgDiv>
            )}
          </S.SignUpMidContainer>
          <S.SignUpBottomContainer>
            <S.SignUpSubmitBtn type='submit'>관리자 등록</S.SignUpSubmitBtn>
          </S.SignUpBottomContainer>
        </form>
      </S.AdminMidContainer>
    </div>
  );
};

export default Mid;
