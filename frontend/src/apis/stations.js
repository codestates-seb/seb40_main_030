import axios from 'axios';

//import.meta.env.VITE_ACCESS_TOKEN
const localToken = localStorage.getItem('accesstoken');
const sessionToken = sessionStorage.getItem('accesstoken');

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_NGROK,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': '111',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${
      localToken !== null
        ? localToken
        : sessionToken !== null
        ? sessionToken
        : null
    }`,
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

  return response;
};

const getBatteryBySetTime = async (id, setTime) => {
  const { data } = await apiClient.get(`/stations/batteries/${id}`, {
    params: setTime,
  });

  return data;
};

const getFilteredStationsBySetTime = async (setTime) => {
  const { data } = await apiClient.get('/stations/searchAll', {
    params: setTime,
  });

  return data?.content;
};

export {
  apiClient,
  getAllStations,
  getStationById,
  deleteStationById,
  getStationByKeyword,
  getBatteryBySetTime,
  getFilteredStationsBySetTime,
};
