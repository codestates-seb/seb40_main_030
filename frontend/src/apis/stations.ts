import { AxiosResponse } from 'axios';

import { Coordinate } from '@/@types/maps';

import { apiClient } from './api';
import { ApiStationsData, ApiBatteryData } from '../@types/apis';

const getAllStations = async () => {
  const {
    data: { content },
  }: AxiosResponse<{ content: ApiStationsData[] }> = await apiClient.get(
    '/stations',
  );

  return content;
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

const getStationsByRegion = async ({
  startTime,
  returnTime,
  city,
  region,
}: {
  startTime?: string;
  returnTime?: string;
  city?: string;
  region?: string;
}) => {
  const {
    data: { content },
  } = await apiClient.get(
    `/stations/search?startTime=${startTime}&endTime=${returnTime}&city=${city}&region=${region}`,
  );

  return content;
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
  getStationsByRegion,
};
