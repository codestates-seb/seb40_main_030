import { apiClient } from './order';

const getAllZones = async () => {
  const { data } = await apiClient.get('/api/zones');

  return data;
};

export { getAllZones };
