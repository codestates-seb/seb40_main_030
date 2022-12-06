import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { authClient } from '../../../apis/api';
import { ProfileImg } from '../../../assets';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NICK_REGEX,
  PHONE_REGEX,
} from '../../../constants/regex';
import { nowState } from '../../../recoil/nowState';
import {
  recoilPostAddress,
  userInfoState,
  isOverLapEmail,
  isOverLapNick,
} from '../../../recoil/userInfoState';
import * as S from './InfoInput.style';

const SignUpMid = () => {
  const navigate = useNavigate();
  const [inSignAddress, setInSignAddress] = useRecoilState(recoilPostAddress);
  const [inputState, setInputState] = useRecoilState(userInfoState);
  const [now, setNow] = useRecoilState(nowState);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [isEmail, setIsEmail] = useRecoilState(isOverLapEmail);
  const [isNick, setIsNick] = useRecoilState(isOverLapNick);
  const [nickMsg, setNickMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
      phone: '',
      address: '',
      photoURL: '',
    },
  });

  useEffect(() => {
    setNow('SignUp');
    setValue('email', inputState.email);
    setValue('password', inputState.password);
    setValue('checkpassword', inputState.checkpassword);
    setValue('nickname', inputState.nickname);
    setValue('phone', inputState.phone);
    setValue('address', inSignAddress);
    setValue('photoURL', inputState.photoURL);
  }, []);

  const checkedEmail = () => {
    if (!watch('email')) {
      alert('E-mail을 입력해주세요.');
    } else {
      authClient
        .get(`/members`)
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

  const checkedNick = () => {
    authClient
      .get(`/members`)
      .then((res) => {
        let existNick = res.data.content.find(
          (user) => user.nickname === watch('nickname'),
        );
        if (existNick) {
          setNickMsg('⚠ 중복된 닉네임입니다.');
          setIsNick(false);
        } else {
          setNickMsg('✅ 사용가능 닉네임입니다.');
          setIsNick(true);
        }
      })
      .catch((err) => {
        console.log('에러: ', err);
      });
  };

  const onValid = async (data) => {
    if (
      isEmail &&
      isNick &&
      !errors.password?.message &&
      watch('password') === watch('checkpassword')
    ) {
      return new Promise(() =>
        setTimeout(() => {
          if (avatar && avatar.length) {
            const file = avatar[0];

            data.photoURL = URL.createObjectURL(file).slice(5);
          } else {
            data.photoURL = 'http://asdsadsadsas';
          }
          console.log('data : ', data);
          authClient
            .post(`/members`, data)
            .then(() => {
              setNow('');
              setInputState('');
              setInSignAddress('');
              navigate('/login');
            })
            .catch((err) => {
              alert('회원가입 실패');
              console.log('err : ', err);
            });
        }, 1000),
      );
    }
    alert('email / nickname 이 중복되었는지 확인하세요.');
  };
  const onInValid = (data) => {
    const errorlist = Object.keys(data).join(' / ');
    alert(errorlist + ' 입력폼의 입력방식을 확인하세요.');
  };

  const avatar = watch('photoURL');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);
  return (
    <S.SignUpContainer>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.SignUpMidContainer>
          <S.SignUpPhotoDiv>
            <S.SignUpPhotoDivInDiv>
              <S.SignUpPhoto>
                <S.PreviewImg
                  src={avatarPreview}
                  onError={(e) => {
                    e.target.src = ProfileImg;
                  }}
                />
              </S.SignUpPhoto>

              <S.FileLabel htmlFor='file'>업로드</S.FileLabel>
              <S.FileLabel
                onClick={() => {
                  setValue('photoURL', '');
                  setAvatarPreview('');
                }}
              >
                취 소
              </S.FileLabel>
              <input
                id='file'
                type='file'
                name='photoURL'
                accept='image/*'
                {...register('photoURL')}
                style={{ display: 'none' }}
              />
            </S.SignUpPhotoDivInDiv>
          </S.SignUpPhotoDiv>

          <S.SignUpEmailInputDiv>
            <input
              type='email'
              name='email'
              placeholder='이메일'
              {...register('email', {
                required: '⚠ E-mail 필수입력',
                pattern: {
                  value: EMAIL_REGEX,
                  message: '⚠ E-mail형식에 맞지 않습니다.',
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
            <S.SignUpEmailSuccessMsgDiv>{emailMsg}</S.SignUpEmailSuccessMsgDiv>
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
                  message: '⚠ 특수문자 / 문자 / 숫자 포함 8~20자리 입력하세요.',
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
          <S.SignUpNickInputDiv>
            <input
              type='text'
              name='nickname'
              placeholder='닉네임'
              {...register('nickname', {
                required: '⚠ 사용할 닉네임을 입력하세요.',
                pattern: {
                  value: NICK_REGEX,
                  message: '⚠ 영어(소문자) / 숫자 / 한글 2~16자리 입력하세요.',
                },
              })}
            />
            {!watch('nickname') ? (
              <button
                style={{ backgroundColor: '#d6d9dc' }}
                type='button'
                disabled
              >
                중복확인
              </button>
            ) : (
              <button type='button' onClick={checkedNick}>
                중복확인
              </button>
            )}
          </S.SignUpNickInputDiv>
          {errors.nickname?.message && (
            <S.SignUpNickFailMsgDiv>
              {errors.nickname?.message}
            </S.SignUpNickFailMsgDiv>
          )}
          {isNick ? (
            <S.SignUpNickSuccessMsgDiv>{nickMsg}</S.SignUpNickSuccessMsgDiv>
          ) : (
            <S.SignUpNickFailMsgDiv>{nickMsg}</S.SignUpNickFailMsgDiv>
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
          <S.SignUpAddressContainer>
            <S.SignUpAddressInputDiv>
              <input
                type='text'
                defaultValue={inSignAddress}
                placeholder='주소'
              />
              <S.SearchAddressBtn
                type='button'
                onClick={() => {
                  setInputState(watch());
                  navigate('/searchaddress');
                }}
              >
                주소찾기
              </S.SearchAddressBtn>
            </S.SignUpAddressInputDiv>
            <S.SignUpAddressInputAddDiv>
              <input
                type='text'
                name='detailAddress'
                placeholder='상세주소 입력'
                {...register('detailAddress')}
              />
            </S.SignUpAddressInputAddDiv>
          </S.SignUpAddressContainer>
        </S.SignUpMidContainer>
        <S.SignUpBottomContainer>
          {!errors.email?.message &&
          !errors.password?.message &&
          !errors.nickname?.message &&
          !errors.phone?.message &&
          watch('email') &&
          watch('password') &&
          watch('checkpassword') &&
          watch('nickname') &&
          watch('phone') ? (
            <S.SignUpSubmitBtn type='submit'>회원가입 완료</S.SignUpSubmitBtn>
          ) : (
            <S.SignUpNoSubmitBtn type='button' disabled>
              회원가입 완료
            </S.SignUpNoSubmitBtn>
          )}
        </S.SignUpBottomContainer>
      </form>
    </S.SignUpContainer>
  );
};

export default SignUpMid;
