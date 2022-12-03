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
  const navigate = useNavigate();
  const { getUserInfo, nickName, email, photo } = useMyPage();
  const [inputState, setInputState] = useRecoilState(userInfoState);

  const handleErrorImg = (e) => {
    e.target.src = ProfileImg;
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  const PhotoImgDiv = styled.img`
    display: block;
    margin: auto;
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  `;
  return (
    <S.MyPageTopContainer>
      <S.ImgNickEmailDiv>
        <PhotoImgDiv src={`blob:${photo}`} onError={handleErrorImg} />
        <S.NickNameDiv>{nickName} 님</S.NickNameDiv>
        <S.EmailDiv>{email}</S.EmailDiv>
      </S.ImgNickEmailDiv>

      <S.MyInfoAndLogoutContainer>
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
      </S.MyInfoAndLogoutContainer>
    </S.MyPageTopContainer>
  );
};

export default Top;
