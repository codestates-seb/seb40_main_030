import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { apiClient } from '../../apis/stations';
import { ProfileImg } from '../../assets';
import {
  recoilPostAddress,
  userInfoState,
  isOverLapNick,
  recoilIsEdit,
  recoilIsPostCode,
  recoilNickname,
  recoilPhone,
} from '../../recoil/userInfoState';
import { nowState } from '../../recoil/nowState';
import * as S from './Mid.style';
const apiUrl = import.meta.env.VITE_NGROK;

const Mid = () => {
  const [userInfo, setUserInfo] = useState('');
  const [isEdit, setIsEdit] = useRecoilState(recoilIsEdit);
  const [now, setNow] = useRecoilState(nowState);

  const navigate = useNavigate();
  const [inSignAddress, setInSignAddress] = useRecoilState(recoilPostAddress);
  const [isPostCode, setIsPostCode] = useRecoilState(recoilIsPostCode);
  const [inputState, setInputState] = useRecoilState(userInfoState);
  const [nickState, setNickState] = useRecoilState(recoilNickname);
  const [phoneState, setPhoneState] = useRecoilState(recoilPhone);
  const [avatarPreview, setAvatarPreview] = useState('');
  const [isNick, setIsNick] = useRecoilState(isOverLapNick);
  const [nickMsg, setNickMsg] = useState('');

  useEffect(() => {
    setNow('MyProfile');
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
          },
        })
        .then((res) => {
          setUserInfo(res.data);
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
          },
        })
        .then((res) => {
          console.log('res : ', res);
          console.log('res.data : ', res.data);
          setUserInfo(res.data);
        });
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      photoURL: userInfo.photoURL,
      nickname: userInfo.nickname,
      phone: userInfo.phone,
      address: userInfo.address,
      detailAddress: userInfo.detailAddress,
    },
  });

  const checkedNick = () => {
    apiClient
      .get(`/members`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        let nowUserNick = false;
        if (userInfo.nickname === watch('nickname')) {
          nowUserNick = true;
        }
        let existNick = res.data.content.find(
          (user) => user.nickname === watch('nickname'),
        );
        if (watch('nickname') === userInfo.nickname) {
          setNickMsg('');
          setIsNick(true);
        }
        if (existNick && !nowUserNick) {
          setNickMsg('⚠ 중복된 닉네임입니다.');
          setIsNick(false);
        } else if (!existNick && !nowUserNick) {
          setNickMsg('✅ 사용가능 닉네임입니다.');
          setIsNick(true);
        }
      })
      .catch((err) => {
        console.log('에러: ', err);
      });
  };
  console.log('userInfo : ', userInfo);
  useEffect(() => {
    if (isEdit && isPostCode) {
      console.log('isEdit && isPostCode가 true -> userInfo : ', userInfo);
      setValue('detailAddress', userInfo.detailAddress); // userInfo는 로컬상태이므로 렌더링되면 초기화!
      setValue('address', inSignAddress);
      setValue('nickname', inputState.nickname);
      if (nickState) {
        setValue('nickname', nickState);
      }
      setValue('phone', inputState.phone);
      if (phoneState) {
        setValue('phone', phoneState);
      }
      setValue('photoURL', inputState.photoURL);
    }
  }, []);

  const avatar = watch('photoURL');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const onValid = async (data) => {
    checkedNick();
    if (isNick) {
      return await new Promise(() => {
        setTimeout(() => {
          if (avatar && avatar.length) {
            const file = avatar[0];
            data.photoURL = URL.createObjectURL(file).slice(5);
          }
          if (!data.photoURL.length) {
            delete data.photoURL;
          }
          if (!watch('nickname')) {
            delete data.nickname;
          }
          if (!watch('phone')) {
            delete data.phone;
          }
          if (!watch('address')) {
            delete data.address;
          }
          apiClient
            .patch(`/members/edit`, data, {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'ngrok-skip-browser-warning': '111',
                'Content-Type': 'application/json',
                Authorization:
                  `Bearer ${localStorage.getItem('accesstoken')}` ||
                  `Bearer ${sessionStorage.getItem('accesstoken')}`,
              },
            })
            .then((res) => {
              setNow('');
              setIsPostCode(false);
              setInputState('');
              setIsEdit(false);
              setInSignAddress('');
              setIsNick(false);
              setNickMsg('');
              navigate('/mypage');
            })
            .catch((err) => {
              console.log('err : ', err);
            });
        }, 1000);
      });
    }
  };

  const onInValid = (data) => {
    const errorlist = Object.keys(data).join(' / ');
    console.log(errorlist + ' 입력폼의 입력방식을 확인하세요.');
    console.log('onInValid : ', data);
  };

  const removeUser = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      console.log('확인누름');
      if (localStorage.getItem('accesstoken')) {
        await axios
          .delete(`${apiUrl}/members/remove`, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'ngrok-skip-browser-warning': '111',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
            },
          })
          .then((res) => {
            setNow('');
            setUserInfo('');
            setInSignAddress('');
            setIsPostCode(false);
            localStorage.removeItem('accesstoken');
            localStorage.removeItem('refreshtoken');
            navigate('/');
            console.log('탈퇴 완료!');
          });
      } else if (sessionStorage.getItem('accesstoken')) {
        await axios
          .delete(`${apiUrl}/members/remove`, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'ngrok-skip-browser-warning': '111',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
            },
          })
          .then((res) => {
            setNow('');
            setUserInfo('');
            setInSignAddress('');
            setIsPostCode(false);
            sessionStorage.removeItem('accesstoken');
            navigate('/');
            console.log('탈퇴 완료!');
          });
      }
    } else {
      console.log('취소누름');
    }
  };

  const callBackUserInfo = () => {
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
          },
        })
        .then((res) => {
          setValue('nickname', res.data.nickname);
          setValue('phone', res.data.phone);
          setValue('address', res.data.address);
          setValue('detailAddress', res.data.detailAddress);
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
          },
        })
        .then((res) => {
          setValue('nickname', res.data.nickname);
          setValue('phone', res.data.phone);
          setValue('address', res.data.address);
          setValue('detailAddress', res.data.detailAddress);
        });
    }
  };

  return (
    <S.MyProfileContainer>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <S.SignUpMidContainer>
          <S.SignUpPhotoDiv>
            <S.SignUpPhotoDivInDiv>
              {isEdit ? (
                avatarPreview ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <S.SignUpPhoto>
                      <S.PreviewImg
                        src={`blob:${userInfo.photoURL}`}
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
                  </>
                )
              ) : (
                <S.SignUpPhoto>
                  <S.PreviewImg
                    src={`blob:${userInfo.photoURL}`}
                    onError={(e) => {
                      e.target.src = ProfileImg;
                    }}
                  />
                </S.SignUpPhoto>
              )}
            </S.SignUpPhotoDivInDiv>
          </S.SignUpPhotoDiv>
          <S.SignUpEmailInputDiv>
            <input type='email' defaultValue={userInfo.email} disabled />
          </S.SignUpEmailInputDiv>
          <S.SignUpNickInputDiv>
            {isEdit ? (
              <>
                <input
                  type='text'
                  name='nickname'
                  defaultValue={userInfo.nickname}
                  {...register('nickname', {
                    pattern: {
                      value: /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/,
                      message: '⚠ 영어 / 숫자 / 한글 2~16자리 입력하세요.',
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
              </>
            ) : (
              <input
                type='text'
                name='nickname'
                defaultValue={userInfo.nickname}
                {...register('nickname')}
                disabled
              />
            )}
          </S.SignUpNickInputDiv>
          {isEdit && errors.nickname?.message && (
            <S.SignUpNickFailMsgDiv>
              {errors.nickname?.message}
            </S.SignUpNickFailMsgDiv>
          )}
          {isEdit && isNick ? (
            <S.SignUpNickSuccessMsgDiv>{nickMsg}</S.SignUpNickSuccessMsgDiv>
          ) : (
            <S.SignUpNickFailMsgDiv>{nickMsg}</S.SignUpNickFailMsgDiv>
          )}
          <S.SignUpPhoneInputDiv>
            {isEdit ? (
              <input
                type='text'
                name='phone'
                defaultValue={userInfo.phone}
                {...register('phone', {
                  required: '⚠ 휴대폰번호 입력',
                  pattern: {
                    value: /^\d{3}\d{3,4}\d{4}$/,
                    message: '⚠ 숫자만 입력하세요.',
                  },
                })}
              />
            ) : (
              <input
                type='text'
                name='phone'
                defaultValue={userInfo.phone}
                disabled
              />
            )}
          </S.SignUpPhoneInputDiv>
          {isEdit && errors.phone?.message && (
            <S.SignUpPhoneFailMsgDiv>
              {errors.phone?.message}
            </S.SignUpPhoneFailMsgDiv>
          )}
          <S.SignUpAddressContainer>
            {isEdit ? (
              <>
                <S.SignUpAddressInputDiv>
                  <input
                    type='text'
                    defaultValue={userInfo.address}
                    placeholder='주소'
                    {...register('address')}
                  />
                  <S.SearchAddressBtn
                    type='button'
                    onClick={() => {
                      if (!watch('nickname')) {
                        setNickState(userInfo.nickname);
                      }
                      if (!watch('phone')) {
                        setPhoneState(userInfo.phone);
                      }
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
                    placeholder='상세주소'
                    defaultValue={userInfo.detailAddress}
                    {...register('detailAddress')}
                  />
                </S.SignUpAddressInputAddDiv>
              </>
            ) : (
              <>
                <S.SignUpAddressInputDiv>
                  <input
                    type='text'
                    defaultValue={userInfo.address}
                    disabled
                    style={{ width: '100%' }}
                  />
                </S.SignUpAddressInputDiv>
                <S.SignUpAddressInputAddDiv>
                  <input
                    type='text'
                    name='detailAddress'
                    placeholder='상세주소'
                    defaultValue={userInfo.detailAddress}
                    {...register('detailAddress')}
                    disabled
                  />
                </S.SignUpAddressInputAddDiv>
              </>
            )}
          </S.SignUpAddressContainer>
        </S.SignUpMidContainer>
        <S.SignUpBottomContainer>
          {isEdit ? (
            <>
              <S.MyProfileEditBtn
                onClick={() => {
                  setIsEdit(!isEdit);
                  callBackUserInfo();
                }}
              >
                수정 취소
              </S.MyProfileEditBtn>
              <S.SignUpSubmitBtn type='submit'>수정 완료</S.SignUpSubmitBtn>
            </>
          ) : (
            <>
              <S.MyProfileEditBtn
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
              >
                내 정보 수정
              </S.MyProfileEditBtn>
              <S.MyProfileRemoveBtn onClick={removeUser}>
                탈퇴하기
              </S.MyProfileRemoveBtn>
            </>
          )}
        </S.SignUpBottomContainer>
      </form>
    </S.MyProfileContainer>
  );
};

export default Mid;
