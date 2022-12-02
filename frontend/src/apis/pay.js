import axios from 'axios';

const apiPay = axios.create({
    baseURL : import.meta.env.VITE_KAKAOPAY_URL,
    headers : {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibWVtYmVySWQiOjEsInN1YiI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY5ODgyMTEwLCJleHAiOjE2Njk5Njg1MTB9.SKARmpYaUkDUxNZ21rfjGkfZECkn2l_w7ssLGGy6S6E',
    },
    withCredentials: true
})

const postKakao = async (state, totalAmount)  => {
    return await apiPay.post(
      `/kakaoPay?itemName=${state.batteryName}&totalAmount=${totalAmount}&batteryId=${state.batteryId}&startTime=${state.startPoint}0&endTime=${state.endPoint}0`
      );
  };

export { postKakao }