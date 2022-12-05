import { useState } from 'react';
import { apiIsToken } from '../../apis/isTokenApi';

const useMyPageBottom = () => {
  const [listData, setListData] = useState([]);

  const getUserPayment = () => {
    apiIsToken
      .get(`/members/find`)
      .then((res) => {
        const payData = res.data.payment;
        setListData([...payData]);
      })
      .catch((err) => {
        console.log(' err : ', err);
      });
  };

  return { getUserPayment, listData };
};

export default useMyPageBottom;
