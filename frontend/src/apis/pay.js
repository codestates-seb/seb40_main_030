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
        // kakaoPay?itemName=SAMSUNG&totalAmount=10000&batteryId=1&startTime=2022-12-05T09:00&endTime=2022-12-05T23:00
        // kakaoPay?itemName=Samsung&totalAmount=20300&batteryId=3&startTime=2022-12-03T05:00&endTime=2022-12-03T06:00'
        `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint.replace(' ', 'T')}&endTime=${state.endPoint.replace(' ', 'T')}`,
      )
      .then((res) => console.log(res));
      // .catch((err) => window.open.assign(err.response.data));
    return response;
  };

export { postKakao }
