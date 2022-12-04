import axios from 'axios';
import { useState } from 'react';
const apiUrl = import.meta.env.VITE_SERVER_URL;

const useMyPageBottom = () => {
  const [listData, setListData] = useState([]);

  const getUserPayment = () => {
    if (localStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accesstoken')}`,
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then((res) => {
          const payData = res.data.payment;
          setListData([...payData]);
        })
        .catch((err) => {
          console.log(' err : ', err);
        });
    } else if (sessionStorage.getItem('accesstoken')) {
      axios
        .get(`${apiUrl}/members/find`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('accesstoken')}`,
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then((res) => {
          const payData = res.data.payment;
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
