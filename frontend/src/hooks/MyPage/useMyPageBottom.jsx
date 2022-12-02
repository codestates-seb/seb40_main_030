import { useState } from 'react';

import { apiClient } from '../../apis/stations';

const useMyPageBottom = () => {
  const [listData, setListData] = useState([]);

  const getUserPayment = () => {
    if (localStorage.getItem('accesstoken')) {
      apiClient
        .get(`/members/find`, {
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
      apiClient
        .get(`/members/find`, {
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
