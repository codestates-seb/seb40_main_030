import axios from 'axios';
import { useState } from 'react';

const useMyPage = () => {
  const apiUrl = 'https://6786-222-233-138-154.jp.ngrok.io';
  const [photo, setPhoto] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const getUserInfo = () => {
    if (localStorage.getItem('accesstoken')) {
      console.log('if문 axios 직전');
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
          console.log('axios 내부 -> res : ', res);
          setNickName(res.data.nickname);
          setEmail(res.data.email);
          setPhoto(res.data.photoURL);
        })
        .catch((err) => {
          console.log('err : ', err);
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          console.log('axios -> res : ', res);
          setNickName(res.data.nickname);
          setEmail(res.data.email);
          setPhoto(res.data.photoURL);
        })
        .catch((err) => {
          console.log('err : ', err);
        });
    }
  };

  return { getUserInfo, nickName, email, photo };
};

export default useMyPage;
