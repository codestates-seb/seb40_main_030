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
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFzZGFzZEBuYXZlci5jb20iLCJtZW1iZXJJZCI6MzAsInN1YiI6ImFzZGFzZEBuYXZlci5jb20iLCJpYXQiOjE2NzAzNDQ1OTUsImV4cCI6MTY3MDQzMDk5NX0.X53bh-jkCDIBKKjOGBIT-F3766g_ehkD0UKwxaxVIlU',
  },
});
const postKakao = async (state, totalAmount) => {
  const localToken = localStorage.getItem('accesstoken');
  const sessionToken = sessionStorage.getItem('accesstoken');

  console.log(localToken);
  console.log(sessionToken);

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
      {
        headers: {
          Authorization: `Bearer ${
            localToken !== null
              ? localToken
              : sessionToken !== null
              ? sessionToken
              : null
          }`,
        },
      },
    )
    .then((res) => window.location.assign(res.data.next_redirect_pc_url))
    .catch((res) => console.log('catch', res));

  console.log(response);

  return response;
};

export { postKakao, apiPay };
