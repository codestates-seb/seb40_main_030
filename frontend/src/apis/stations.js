// import { apiClient } from './order';
import axios from 'axios';

const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibWVtYmVySWQiOjEsInN1YiI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY5ODA3NTE0LCJleHAiOjE2Njk4OTM5MTR9.1rywMENWnxLRRFmBStzKzQNLpShQRhNEycjiLW_ixfo`;
// const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwibWVtYmVySWQiOjEsInN1YiI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjY5NjUwODAzLCJleHAiOjE2Njk3MzcyMDN9.TY6HuuLoH64VXC8nded1Cox8zMjR6ZYcfjkT0FcIV3I`;

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_NGROK,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
  withCredentials: true,
});

const getAllStations = async () => {
  const { data } = await apiClient.get('/stations');

  return data.content;
};

const getStationById = async (id) => {
  const { data } = await apiClient.get(`/stations/${id}`);

  return data;
};

const deleteStationById = async (id) => {
  return await apiClient.delete(`/stations/${id}`);
};

const getStationByKeyword = async (keyword) => {
  const response = await apiClient.get(`/stations/keyword?keyword=${keyword}`);

  console.log(response);

  return response;
};

const getBatteryBySetTime = async (id, setTime) => {
  const { data } = await apiClient.get(`/stations/batteries/${id}`, {
    params: setTime,
  });

  return data;
};

const getPaymentsTable = async () => {
  const { data } = await apiClient.get('/payments');

  return data?.content;
};

const getFilteredStationsBySetTime = async (setTime) => {
  const { data } = await apiClient.get('/stations/searchAll', {
    params: setTime,
  });

  return data?.content;
};

export {
  getAllStations,
  getStationById,
  deleteStationById,
  getStationByKeyword,
  getPaymentsTable,
  getBatteryBySetTime,
  getFilteredStationsBySetTime,
};
