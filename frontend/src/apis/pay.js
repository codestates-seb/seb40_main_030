import axios from 'axios';

const apiPay = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Acess-Control-Allow-Origin': '*',
    'Content-type': 'application/json;charset=utf-8',
    // Authorization: import.meta.env.VITE_PAY_KEY,
  }
  // withCredentials: true,
});

const postKakao = async (state, totalAmount) => {
  const response = await apiPay
    .post(
      `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint.replace(' ','T',)}&endTime=${state.endPoint.replace(' ', 'T')}`,)
    .catch((err) => window.open.assign(err.response.data));
  return response;
};

export { postKakao };
