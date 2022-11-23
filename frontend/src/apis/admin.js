import { apiClient } from './order';

const getAdminById = async (adminId) => {
  const res = await apiClient.get(`admins/${adminId}`);
  return res;
};

export { getAdminById };
