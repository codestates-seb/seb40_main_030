import axios from 'axios';

const apiPay = axios.create({
    baseURL : import.meta.env.VITE_KAKAOPAY_URL,
    headers : {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibWVtYmVySWQiOjEsInN1YiI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY5OTczODIxLCJleHAiOjE2NzAwNjAyMjF9.Zy6jUpvWhcMSPmIj42dbZ8UIx2kQ_3CsLLHSPf01C7U',
    },
    withCredentials: true
})

const postKakao = async (state, totalAmount) => {
    const response = await apiPay
      .post(
        `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint.replace(' ', 'T')}&endTime=${state.endPoint.replace(' ', 'T')}`,
      )
      .catch((err) => console.log(err.response.data));
    return response;
  };

export { postKakao }
