import axios from 'axios';

const apiPay = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem('accesstoken') !== null
        ? localStorage.getItem('accesstoken')
        : sessionStorage.getItem('accesstoken') !== null
        ? sessionStorage.getItem('accesstoken')
        : null
    }`,
  },
});

// prettier-ignore

const postKakao = async (state, totalAmount) => {
  const response = await apiPay
    .get(
      `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=
      ${state.batteryId}&startTime=${state.startPoint.replace(' ','T')}&endTime=${state.endPoint.replace(' ', 'T')}`,
    ).then((res) => window.location.assign(res.data.next_redirect_pc_url)
    ).catch((res) => console.log(res));
  return response;
};
export { postKakao, apiPay };
