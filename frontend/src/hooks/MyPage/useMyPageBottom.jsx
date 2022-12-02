import axios from 'axios';
import { useState } from 'react';

const useMyPageBottom = () => {
  const apiUrl = 'https://6786-222-233-138-154.jp.ngrok.io';
  const [listData, setListData] = useState([]);

  const getUserPayment = () => {
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
          },
        })
        .then((res) => {
          const payData = res.data.payment;
          console.log(
            'useMypage-> 예약,사용현황 리스트 받아오는 요청 res.data.payment : ',
            res.data.payment,
          );
          console.log('payData.length : ', payData.length);
          setListData([...payData]);
        })
        .catch((err) => {
          console.log(
            'mypage-> 예약,사용현황 리스트 받아오는 요청 err : ',
            err,
          );
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Access-Control-Allow-Origin': '*',
            'ngrok-skip-browser-warning': '111',
          },
        })
        .then((res) => {
          const payData = res.data.payment;
          console.log(
            'mypage-> 예약,사용현황 리스트 받아오는 요청 res.data.payment : ',
            res.data.payment,
          );
          setListData([...payData]);
        })
        .catch((err) => {
          console.log(
            'mypage-> 예약,사용현황 리스트 받아오는 요청 err : ',
            err,
          );
        });
    }
  };

  return { getUserPayment, listData };
};

export default useMyPageBottom;
