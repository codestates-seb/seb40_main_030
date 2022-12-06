import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { MyPageIcon } from '../../assets';
import { ProfileImg } from '../../assets';
import useMyPage from '../../hooks/MyPage/useMyPageTop';
import { userInfoState, recoilIsEdit } from '../../recoil/userInfoState';
import GenLogout from '../Login/GenLogout/GenLogout';
import * as S from './ShortInfo.style';

const Top = () => {
  const navigate = useNavigate();
  const { getUserInfo } = useMyPage();
  const userInfo = useRecoilValue(userInfoState);
  const setIsEdit = useSetRecoilState(recoilIsEdit);

  const handleErrorImg = (e) => {
    e.target.src = ProfileImg;
  };

  useEffect(() => {
    getUserInfo();
    setIsEdit(false);
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
        <PhotoImgDiv
          src={`blob:${userInfo.photoURL}`}
          onError={handleErrorImg}
        />
        <S.NickNameDiv>{userInfo.nickname} 님</S.NickNameDiv>
        <S.EmailDiv>{userInfo.email}</S.EmailDiv>
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
