import { apiClient } from './api';

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

const getSearchDataBySetTime = async (setTime) => {
  const { data } = await apiClient.get(`/stations/searchAll`, {
    params: setTime,
  });

  return data;
};

const getBatteryByLocationAndSetTime = async (location, setTime) => {
  console.log(location);
  const { data } = await apiClient.get('/stations/search', {
    params: {
      latitude: location.latitude,
      longitude: location.longitude,
      startTime: setTime.startTime,
      endTime: setTime.endTime,
    },
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
  getBatteryByLocationAndSetTime,
  getSearchDataBySetTime,
};
