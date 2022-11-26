import { apiClient } from './order';
// import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: import.meta.env.VITE_NGROK,
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//   },
//   withCredentials: true,
// });

const getAllStations = async () => {
  const { data } = await apiClient.get('/api/stations');

  return data;
};

const getStationById = async (id) => {
  const { data } = await apiClient.get(`/api/stations/${id}`);

  return data;
};

export { getAllStations, getStationById };
