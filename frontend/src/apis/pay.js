import axios from 'axios';

const apiPay = axios.create({
    baseURL : import.meta.env.VITE_NGROK,
    headers : {
        'Acess-Control-Allow-Origin' : '*',
        'ngrok-skip-browser-warning' : '111',
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: import.meta.env.VITE_PAY_KEY,
    },
    withCredentials: true
})

const postKakao = async (state, totalAmount) => {
    const response = await apiPay
      .post(
        `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint.replace(' ', 'T')}&endTime=${state.endPoint.replace(' ', 'T')}`,
      )
      .catch((err) => window.open.assign(err.response.data));
    return response;
  };

export { postKakao }
