import axios from 'axios';

const apiPay = axios.create({
    baseURL : 'https://ec2-54-180-116-86.ap-northeast-2.compute.amazonaws.com',
    headers : {
        'Acess-Control-Allow-Origin' : '*',
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: import.meta.env.VITE_PAY_KEY,
    },
    withCredentials: true
})

const postKakao = async () => {
    const respones = await apiPay.post(
        // `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint.replace(' ', 'T')}&endTime=${state.endPoint.replace(' ', 'T')}`
        `/kakaoPay?itemName=SAMSUNG&totalAmount=10000&batteryId=1&startTime=2022-12-05T09:00&endTime=2022-12-05T23:00`,
      )
      .then((response) => {
        console.log('response',response);
      }, (error) => {
        console.log('error',error);
      });
      return respones
    };

export { postKakao }
