import axios from 'axios';
import { useEffect, useState } from 'react';
import GenLogout from '../Login/GenLogout/GenLogout';
// import { useRecoilState } from 'recoil';
// import { userMemberId } from '../../recoil/userInfoState';
import styled from 'styled-components';
import * as S from './Top.style';
import { MyPageIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';
import useMyPage from '../../hooks/MyPage/useMyPageTop';

const Top = () => {
  // const [id, setId] = useRecoilState(userMemberId);
  const navigate = useNavigate();
  const { getUserInfo, nickName, email, photo } = useMyPage();

  useEffect(() => {
    console.log(
      'mypage/ localStorage ->  accesstoken  값 : ',
      localStorage.getItem('accesstoken'),
    );
    console.log(
      'MyPage-> sessionStorage -> accesstoken 값 : ',
      sessionStorage.getItem('accesstoken'),
    );
    getUserInfo();
  }, []);
  console.log('photo : ', photo);
  const DefaultImgDiv = styled.div`
    display: block;
    margin: auto; // display: block 주고 마진 오토로 하면 이미지를 가운데정렬할수있다.
    width: 50px;
    height: 50px;
    background-image: url(${'https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=128&d=identicon&r=PG&f=1'});
    border-radius: 50%;
  `;
  const PhotoImgDiv = styled.div`
    display: block;
    margin: auto;
    border: 1px solid white;
    background-color: white;
    width: 50px;
    height: 50px;
    background-image: url(${photo});
    border-radius: 50%;
  `;

  return (
    <S.MyPageTopContainer>
      {photo ? <PhotoImgDiv /> : <DefaultImgDiv />}
      <S.NickNameDiv>{nickName} 님</S.NickNameDiv>
      <S.EmailDiv>{email}</S.EmailDiv>
      <S.MyInfoAndLogoutDiv>
        <S.MyInfoDiv
          onClick={() => {
            navigate('/myprofile');
          }}
        >
          My Profile
        </S.MyInfoDiv>
        <GenLogout />
      </S.MyInfoAndLogoutDiv>
    </S.MyPageTopContainer>
  );
};

export default Top;
