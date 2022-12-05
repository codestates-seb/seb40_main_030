import axios from 'axios';

const apiPay = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    // 'Acess-Control-Allow-Origin': '*',
    'Content-type': 'application/json;charset=utf-8',
    // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibWVtYmVySWQiOjEsInN1YiI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjcwMjM0MzcwLCJleHAiOjE2NzAyMzYxNzB9.L8aJB975ptj7yyYmMNMIopZdgJnRav5pMe1lPe375W4',
  },
  withCredentials: true,
});

const postKakao = async () => {
  const response = await apiPay
    .post(
      // `/kakaoPay?itemName=${
      //   state.batteryName
      // }&totalAmount=${totalAmount}&batteryId=${
      //   state.batteryId
      // }&startTime=${state.startPoint.replace(
      //   ' ',
      //   'T',
      // )}&endTime=${state.endPoint.replace(' ', 'T')}`,
      'kakaoPay?itemName=HYUNDAI&totalAmount=80000&batteryId=1&startTime=2022-12-24T18:00&endTime=2022-12-24T19:00'
    )
    .then((res) => console.log(res))
    // .catch((err) => console.log(err));
  return response;
};

export { postKakao };
