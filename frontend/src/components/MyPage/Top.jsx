import { useEffect, useState } from 'react';
import GenLogout from '../Login/GenLogout/GenLogout';

import styled from 'styled-components';
import * as S from './Top.style';
import { MyPageIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';
import useMyPage from '../../hooks/MyPage/useMyPageTop';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../recoil/userInfoState';
import { ProfileImg } from '../../assets';

const Top = () => {
  // const [id, setId] = useRecoilState(userMemberId);
  const navigate = useNavigate();
  const { getUserInfo, nickName, email, photo } = useMyPage();
  const [inputState, setInputState] = useRecoilState(userInfoState);

  const handleErrorImg = (e) => {
    e.target.src = ProfileImg;
  };

  useEffect(() => {
    console.log(
      'mypage/ localStorage ->  accesstoken  값 : ',
      localStorage.getItem('accesstoken'),
    );
    console.log(
      'MyPage-> sessionStorage -> accesstoken 값 : ',
      sessionStorage.getItem('accesstoken'),
    );
    // setInputState('');
    getUserInfo();
  }, []);
  console.log('MyPage-> photo : ', photo);
  const PhotoImgDiv = styled.img`
    display: block;
    margin: auto;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  `;

  console.log('photo : ', photo);
  return (
    <S.MyPageTopContainer>
      <PhotoImgDiv src={`blob:${photo}`} onError={handleErrorImg} />
      <S.NickNameDiv>{nickName} 님</S.NickNameDiv>
      <S.EmailDiv>{email}</S.EmailDiv>
      <S.MyInfoAndLogoutDiv>
        <S.MyInfoDiv
          onClick={() => {
            navigate('/myprofile');
          }}
        >
          <MyPageIcon style={{ height: '11px' }} /> 내 정보
        </S.MyInfoDiv>
        <GenLogout />
      </S.MyInfoAndLogoutDiv>
    </S.MyPageTopContainer>
  );
};

export default Top;
