import axios from 'axios';

import { BASE_URL } from '@/constants/admin';
const LOCAL_BASE_URL = import.meta.env.REACT_APP_BASE_URL;
const axiosAdminInstance = axios.create({
  baseURL: LOCAL_BASE_URL,
  headers: {
    // 'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
  },
});

//관리자 정보 가져옴
const getAdminById = async (adminId) => {
  const res = await axiosAdminInstance.get(`/admins/${adminId}`);
  // console.log('응답은', res.headers.get('content-type'));
  console.log('get요청 응답은', res.data);
  return res.data;
};

//관리자 배터리 추가
const addBattery = async (batteryInfo) => {
  const res = await axiosAdminInstance.post('/batteries/', batteryInfo);
  console.log('post요청 응답은', res);
  return res;
};

//관리자 배터리 삭제
const deleteBattery = async (batteryId) => {
  const res = await axiosAdminInstance.delete(`/batteries/${batteryId}`);
  console.log('deleteBattery실행 res', res);
  return res;
};
export { getAdminById, addBattery, deleteBattery };
