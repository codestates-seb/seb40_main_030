import axios from 'axios';
import { useState } from 'react';
const apiUrl = import.meta.env.VITE_SERVER_URL;

const useMyPage = () => {
  const [photo, setPhoto] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const getUserInfo = () => {
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
          },
        })
        .then((res) => {
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
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
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
