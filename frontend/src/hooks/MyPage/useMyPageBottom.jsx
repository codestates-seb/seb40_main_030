import { useState } from 'react';
import { apiNeedToken, getConfig } from '../../apis/api';

const useMyPageBottom = () => {
  const [listData, setListData] = useState([]);

  const getUserPayment = async () => {
    const { data } = await apiNeedToken.get(`/members/find`, getConfig());
    // .then((res) => {
    //   const payData = res.data.payment;
    //   setListData([...payData]);
    // })
    // .catch((err) => {
    //   console.log(' err : ', err);
    // });

    setListData([...data.payment]);
  };
  return { getUserPayment, listData };
};

export default useMyPageBottom;
