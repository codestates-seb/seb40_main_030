import axios from 'axios';
import { useEffect, useState } from 'react';
import GenLogout from '../Login/GenLogout/GenLogout';
import { useRecoilState } from 'recoil';
import { userMemberId } from '../../recoil/userInfoState';
import styled from 'styled-components';
import * as S from './Top.style';

const Top = () => {
  const [id, setId] = useRecoilState(userMemberId);
  const [photo, setPhoto] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  // 사용중 상태 (예약현환)
  const [inProgress, setInProgress] = useState([]);
  // 사용완료 상태 (사용현황)
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    axios
      .get(`https://5e7b-222-233-138-154.jp.ngrok.io/members/1`, {
        headers: {
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
    border: 1px solid black;
    height: 50px;
    background-image: url(${photo});
  `;

  return (
    <S.MyPageTopContainer>
      <ImgDiv></ImgDiv>
      <div>{nickName}</div>
      <div>{email}</div>
      <div>
        <div>내정보</div>
        <GenLogout />
      </div>
    </S.MyPageTopContainer>
  );
};

export default Top;
