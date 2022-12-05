import { useState } from 'react';
import { apiIsToken } from '../../apis/api';

const useMyPage = () => {
  const [photo, setPhoto] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const getUserInfo = () => {
    apiIsToken
      .get(`/members/find`)
      .then((res) => {
        setNickName(res.data.nickname);
        setEmail(res.data.email);
        setPhoto(res.data.photoURL);
      })
      .catch((err) => {
        console.log('err : ', err);
      });
  };

  return { getUserInfo, nickName, email, photo };
};

export default useMyPage;
