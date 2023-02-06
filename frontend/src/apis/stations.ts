import { apiClient } from './api';
import { Coordinate } from '@/@types/maps';

const getAllStations = async () => {
  const { data } = await apiClient.get('/stations');

  return data.content;
};

const getStationById = async (id: number | string) => {
  const { data } = await apiClient.get(`/stations/${id}`);

  return data;
};

const deleteStationById = async (id: number | string) => {
  return await apiClient.delete(`/stations/${id}`);
};

const getStationByKeyword = async (keyword: string) => {
  const response = await apiClient.get(`/stations/keyword?keyword=${keyword}`);

  return response;
};

const getBatteryBySetTime = async (
  id: number | string,
  setTime: { startTime?: string; returnTime?: string },
) => {
  const { data } = await apiClient.get(`/stations/batteries/${id}`, {
    params: { startTime: setTime.startTime, endTime: setTime.returnTime },
  });

  return data;
};

const getSearchDataBySetTime = async (setTime: {
  startTime?: string;
  returnTime?: string;
}) => {
  const { data } = await apiClient.get(`/stations/searchAll`, {
    params: { startTime: setTime.startTime, endTime: setTime.returnTime },
  });

  return data;
};

const getBatteryByLocationAndSetTime = async (
  location: Coordinate,
  setTime: { startTime?: string; returnTime?: string },
) => {
  const { data } = await apiClient.get('/stations/search', {
    params: {
      latitude: location.latitude,
      longitude: location.longitude,
      startTime: setTime.startTime,
      endTime: setTime.returnTime,
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
