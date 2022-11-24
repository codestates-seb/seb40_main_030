import {
  filterBatteryInfo,
  getEachStateNum,
} from '../components/Business/utils';
import { apiClient } from './order';

const getAdminById = async (adminId) => {
  const res = await apiClient.get(`/admins/${adminId}`);
  const batteryList = filterBatteryInfo(res.data);
  const countList = getEachStateNum(batteryList);

  return { batteryList, countList };
};

export { getAdminById };
