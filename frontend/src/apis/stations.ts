import { apiClient } from './api';
import { Coordinate } from '@/@types/maps';
import { AxiosResponse } from 'axios';
import { ApiStationsData, ApiBatteryData } from '../@types/apis';

const getAllStations = async () => {
  const { data }: AxiosResponse<{ content: ApiStationsData[] }> =
    await apiClient.get('/stations');

  return data.content;
};

const getBatteryBySetTime = async (
  id: number,
  setTime: { startTime?: string; returnTime?: string },
) => {
  const { data }: AxiosResponse<ApiBatteryData> = await apiClient.get(
    `/stations/batteries/${id}`,
    {
      params: { startTime: setTime.startTime, endTime: setTime.returnTime },
    },
  );

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
  getBatteryBySetTime,
  getBatteryByLocationAndSetTime,
  getSearchDataBySetTime,
};
