import axios from 'axios';
import { useState } from 'react';

const useMyPageBottom = () => {
  // 사용중 상태 (예약현환)
  const [inProgress, setInProgress] = useState([]);
  // 사용완료 상태 (사용현황)
  const [success, setSuccess] = useState([]);

  const getUserPayment = () => {
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`https://5222-222-233-138-154.jp.ngrok.io/members/find`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
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

          for (let i = 0; i < payData.length; i++) {
            if (payData[i].status === 'IN_PROGRESS') {
              setInProgress([...inProgress, payData[i]]);
            } else {
              setSuccess([...success, payData[i]]);
            }
          }
        })
        .catch((err) => {
          console.log(
            'mypage-> 예약,사용현황 리스트 받아오는 요청 err : ',
            err,
          );
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`https://5222-222-233-138-154.jp.ngrok.io/members/find`, {
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

          for (let i = 0; i < payData.length; i++) {
            if (payData[i].status === 'IN_PROGRESS') {
              setInProgress([...inProgress, payData[i]]);
            } else {
              setSuccess([...success, payData[i]]);
            }
          }
        })
        .catch((err) => {
          console.log(
            'mypage-> 예약,사용현황 리스트 받아오는 요청 err : ',
            err,
          );
        });
    }
  };

  return { inProgress, success, getUserPayment };
};

export default useMyPageBottom;
