import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { apiClient } from '../../../apis/stations';
import { ProfileImg } from '../../../assets';
import {
  recoilPostAddress,
  userInfoState,
  isOverLapEmail,
  isOverLapNick,
} from '../../../recoil/userInfoState';
import * as S from './Mid.style';

const SignUpMid = () => {
  const navigate = useNavigate();
  const [inSignAddress, setInSignAddress] = useRecoilState(recoilPostAddress);
  const [inputState, setInputState] = useRecoilState(userInfoState); // input value 값들을 전역에 저장해둘 상태변수

  const [avatarPreview, setAvatarPreview] = useState('');

  console.log('userInfoState : ', userInfoState);
  console.log('inputState : ', inputState);

  // ----- email,nickname이 올바른 or 중복이 없는 사용가능한 value인지 boolean 상태
  const [isEmail, setIsEmail] = useRecoilState(isOverLapEmail);
  const [isNick, setIsNick] = useRecoilState(isOverLapNick);

  // ----- email, nickname 중복오류 메시지 상태
  const [nickMsg, setNickMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  // ---- react-hook-form -----
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
  }); // 제출버튼 누른적없어도 input value가 바뀔때마다 ->
  // -> 바로바로 유효성 errors 메시지를 화면에 출력할 수 있음 <- onchange 모드 설정을 안해주면 한번 제출버튼을 누르고 나서야 에러메시지가 화면에 바뀔때마다 출력댐

  // 주소찾기 마치고 다시 SignUp 페이지로 리다이렉션될때(렌더링) 이전 input value들 전역상태에서 가져오기
  // recoil 즉, 전역상태는 컴포넌트 생명주기와는 별도로 동작하기때문에 페이지이동(랜더링)을해도 그 상태가 유지!
  // 새로고침이나 서비스 종료를 하면 전역상태도 초기화!
  useEffect(() => {
    setValue('email', inputState.email);
    setValue('password', inputState.password);
    setValue('checkpassword', inputState.checkpassword);
    setValue('nickname', inputState.nickname);
    setValue('phone', inputState.phone);
    setValue('address', inSignAddress);
    setValue('photoURL', inputState.photoURL);
    console.log('useEffect -> watch(photoURL) : ', watch('photoURL'));
    console.log('useEffect inputState.photoURL : ', inputState.photoURL);
  }, []);
  console.log(watch('photoURL'));
  console.log('watch() : ', watch());

  const checkedEmail = () => {
    if (!watch('email')) {
      alert('E-mail을 입력해주세요.');
    } else {
      apiClient
        .get(`/members`, {
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

  const checkedNick = () => {
    apiClient
      .get(`/members`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
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
          console.log(' submit-> onSubmit data : ', data);
          // data.address = inSignAddress + ' ' + getValues('detailAddress');

          if (avatar && avatar.length) {
            const file = avatar[0];
            console.log(
              'submit-> if문 내부 URL.createObjectURL(file) : ',
              URL.createObjectURL(file),
            );
            data.photoURL = URL.createObjectURL(file).slice(5);
          }
          console.log('submit -> axios직전 data : ', data);
          apiClient
            .post(`/members`, data)
            .then(() => {
              setInputState('');
              setInSignAddress('');
              navigate('/login');
            })
            .catch((err) => {
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
    console.log('onInValid : ', data);
  };

  const avatar = watch('photoURL');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
      console.log('URL.createObjectURL(file) : ', URL.createObjectURL(file));
    }
  }, [avatar]);

  return (
    <S.SignUpContainer>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.SignUpMidContainer>
          <S.SignUpPhotoDiv>
            <S.SignUpPhoto>
              <S.PreviewImg
                src={avatarPreview}
                onError={(e) => {
                  e.target.src = ProfileImg;
                }}
              />
            </S.SignUpPhoto>
            <S.FileLabel htmlFor='file'>업로드</S.FileLabel>
            <input
              id='file'
              type='file'
              name='photoURL'
              accept='image/*'
              {...register('photoURL')}
              style={{ display: 'none' }}
            />
          </S.SignUpPhotoDiv>

          <S.SignUpEmailInputDiv>
            <input
              type='email'
              name='email'
              placeholder='이메일'
              {...register('email', {
                required: '⚠ E-mail 필수입력',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
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
          {emailMsg === '✅ 사용 가능 E-mail입니다.' ? (
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
                  value:
                    /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
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
                  value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
                  message: '⚠ 영어 / 숫자 / 한글 2~16자리 입력하세요.',
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
          {nickMsg === '✅ 사용가능 닉네임입니다.' ? (
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
                  value: /^\d{3}\d{3,4}\d{4}$/,
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
                // onChange={(e) => setInSignAddress(e.target.value)}
              />
              <S.SearchAddressBtn
                type='button' // 버튼에 type을 지정을 안해주면 디폴트값은 'submit'이다 그래서 이렇게 지정해줌!
                onClick={() => {
                  setInputState(watch());
                  // setInputState({photoURL:URL.createObjectURL(avatar[0])});
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
          <S.SignUpSubmitBtn type='submit'>회원가입 완료</S.SignUpSubmitBtn>
        </S.SignUpBottomContainer>
      </form>
    </S.SignUpContainer>
  );
};

export default SignUpMid;
