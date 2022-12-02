import axios from 'axios';

import { BASE_URL } from '@/constants/admin';
const LOCAL_BASE_URL = import.meta.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
// const accessToken =
//   'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsIm1lbWJlcklkIjoxLCJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Njk4NjYxNDQsImV4cCI6MTY2OTk1MjU0NH0.6OtF28bsg7JmZ6RlguKRVylVD3tjswn0tfE9GE-LMfY';
const axiosAdminInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'ngrok-skip-browser-warning': '111',
    authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

//관리자 정보 가져옴 (배터리, 주유소 정보)
const getAdminById = async () => {
  const res = await axiosAdminInstance.get(`/admins/find`);
  return res.data;
};

//관리자 배터리 추가
const addBattery = async (batteryInfo) => {
  const res = await axiosAdminInstance.post('/batteries', batteryInfo);
  return res;
};
//관리자 배터리 수정
const editBattery = async (batteryId, batteryInfo) => {
  const res = await axiosAdminInstance.patch(
    `/batteries/${batteryId}`,
    batteryInfo,
  );

  return res;
};

//관리자 배터리 삭제
const deleteBattery = async (batteryId) => {
  const res = await axiosAdminInstance.delete(`/batteries/${batteryId}`);

  return res;
};

//관리자 주유소 조회
const getStation = async () => {
  const res = await axiosAdminInstance.get(`/stations`);

  return res.data;
};

//관리자 주유소 추가
const addStation = async (batteryInfo) => {
  const res = await axiosAdminInstance.post(`/stations`, batteryInfo);
  return res.data;
};

//관리자 주유소 수정
const editStation = async (stationId, stationInfo) => {
  const res = await axiosAdminInstance.patch(
    `/stations/${stationId}`,
    stationInfo,
  );

  return res;
};

//관리자 주유소 삭제
const deleteStation = async (batteryId) => {
  const res = await axiosAdminInstance.delete(`/stations/${batteryId}`);

  return res.data;
};

export {
  axiosAdminInstance,
  getAdminById,
  addBattery,
  deleteBattery,
  getStation,
  addStation,
  deleteStation,
  editBattery,
  editStation,
};