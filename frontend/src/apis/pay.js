import axios from 'axios';

const apiPay = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      localStorage.getItem('accesstoken') !== null
        ? localStorage.getItem('accesstoken')
        : sessionStorage.getItem('accesstoken') !== null
        ? sessionStorage.getItem('accesstoken')
        : null
    }`,
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFzZGFzZEBuYXZlci5jb20iLCJtZW1iZXJJZCI6MzAsInN1YiI6ImFzZGFzZEBuYXZlci5jb20iLCJpYXQiOjE2NzAzNDQ1OTUsImV4cCI6MTY3MDQzMDk5NX0.X53bh-jkCDIBKKjOGBIT-F3766g_ehkD0UKwxaxVIlU',
  },
});
const postKakao = async (state, totalAmount) => {
  const response = await apiPay
    .get(
      `/kakaoPay?itemName=${
        state.batteryName
      }&totalAmount=${totalAmount}&batteryId=${
        state.batteryId
      }&startTime=${state.startPoint.replace(
        ' ',
        'T',
      )}&endTime=${state.endPoint.replace(' ', 'T')}`,
      // 'kakaoPay?itemName=SAMSUNG&totalAmount=10000&batteryId=1&startTime=2022-12-10T09:00&endTime=2022-12-11T23:00',
    )
    .then((res) => window.location.assign(res.data.next_redirect_pc_url))
    .catch((res) => console.log('catch', res));
  return response;
};

export { postKakao, apiPay };
