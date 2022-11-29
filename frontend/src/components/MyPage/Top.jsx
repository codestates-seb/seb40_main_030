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

  const defaultImg =
    'https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=128&d=identicon&r=PG&f=1';

  const handleErrorImg = (e) => {
    e.target.src = defaultImg;
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
    getUserInfo();
  }, []);
  console.log('photo : ', photo);
  const DefaultImgDiv = styled.img`
    display: block;
    margin: auto; // display: block 주고 마진 오토로 하면 이미지를 가운데정렬할수있다.
    width: 50px;
    height: 50px;
    /* background-image: url(${'https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=128&d=identicon&r=PG&f=1'}); */
    border-radius: 50%;
    object-fit: cover;
  `;
  const PhotoImgDiv = styled.img`
    display: block;
    margin: auto;
    border: 1px solid white;
    background-color: white;
    width: 50px;
    height: 50px;
    /* background-image: url(${photo}); */
    border-radius: 50%;
    object-fit: cover;
  `;

  console.log('photo : ', photo);
  return (
    <S.MyPageTopContainer>
      <PhotoImgDiv src={`blob:${photo}`} onError={handleErrorImg} />
      {/* {photo ? (
        <PhotoImgDiv
          src={`blob:${photo}`}
          onError={
            'https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=128&d=identicon&r=PG&f=1'
          }
        /> // 불러 올때도 blob!
      ) : (
        <DefaultImgDiv
          src={
            'https://www.gravatar.com/avatar/0555bd0deb416a320a0069abef08078a?s=128&d=identicon&r=PG&f=1'
          }
        />
      )} */}
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
