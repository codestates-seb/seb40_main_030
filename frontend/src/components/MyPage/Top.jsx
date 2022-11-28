import axios from 'axios';
import { useEffect, useState } from 'react';
import GenLogout from '../Login/GenLogout/GenLogout';
import { useRecoilState } from 'recoil';
import { userMemberId } from '../../recoil/userInfoState';
import styled from 'styled-components';
import * as S from './Top.style';
import { MyPageIcon } from '../../assets';

const Top = () => {
  const [id, setId] = useRecoilState(userMemberId);
  const [photo, setPhoto] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(
      'mypage/ 들어가면 실행되는 useEffect 내부 accesstoken 보낼때 값 : ',
      `Bearer ${localStorage.getItem('accesstoken')}`,
    );
    axios
      .get(`https://fd5f-222-233-138-154.jp.ngrok.io/members/1`, {
        headers: {
          accesstoken: `Bearer ${localStorage.getItem('accesstoken')}`,
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': '111',
        },
      })
      .then((res) => {
        console.log('axios -> res : ', res);
        setNickName(res.data.nickname);
        setEmail(res.data.email);
        setPhoto(res.data.photoURL);
      });
  }, []);

  const ImgDiv = styled.div`
    display: block;
    margin: auto; // display: block 주고 마진 오토로 하면 이미지를 가운데정렬할수있다.
    border: 1px solid black;
    width: 50px;
    height: 50px;
    /* background-image: url(${photo}); */
    /* background-image: url(${MyPageIcon}); */
    border-radius: 50%;
  `;

  return (
    <S.MyPageTopContainer>
      <ImgDiv></ImgDiv>
      <S.NickNameDiv>{nickName} 님</S.NickNameDiv>
      <S.EmailDiv>{email}</S.EmailDiv>
      <S.MyInfoAndLogoutDiv>
        <S.MyInfoDiv>My Profile</S.MyInfoDiv>
        <GenLogout />
      </S.MyInfoAndLogoutDiv>
    </S.MyPageTopContainer>
  );
};

export default Top;
