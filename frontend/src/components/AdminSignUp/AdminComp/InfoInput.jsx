import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { authClient } from '../../../apis/api';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from '../../../constants/regex';
import { isOverLapEmail } from '../../../recoil/userInfoState';
import * as S from './InfoInput.style';

const Mid = () => {
  const navigate = useNavigate();
  const [isEmail, setIsEmail] = useRecoilState(isOverLapEmail);
  const [emailMsg, setEmailMsg] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const checkedEmail = () => {
    if (!watch('email')) {
      alert('E-mail을 입력해주세요.');
    } else {
      authClient
        .get(`/admins`)
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
    checkedEmail();
    if (
      isEmail &&
      !errors.password?.message &&
      watch('password') === watch('checkpassword')
    ) {
      delete data.checkpassword;
      authClient
        .post(`/admins`, data)
        .then(() => {
          setIsEmail(false);
          navigate(-1);
        })
        .catch(() => {
          alert(`승인되지 않은 E-Mail입니다.\n☎️ 서비스센터 문의.`);
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
                    value: EMAIL_REGEX,
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
                    value: PASSWORD_REGEX,
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
                  pattern: {
                    value: PHONE_REGEX,
                    message: '⚠ 숫자만 입력하세요.',
                  },
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
            {!errors.email?.message &&
            !errors.password?.message &&
            !errors.phone?.message &&
            watch('email') &&
            watch('password') &&
            watch('checkpassword') &&
            watch('phone') ? (
              <S.SignUpSubmitBtn type='submit'>관리자 등록</S.SignUpSubmitBtn>
            ) : (
              <S.SignUpNoSubmitBtn type='button' disabled>
                관리자 등록
              </S.SignUpNoSubmitBtn>
            )}
          </S.SignUpBottomContainer>
        </form>
      </S.AdminMidContainer>
    </div>
  );
};

export default Mid;
