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
const addBattery = async (batteryInfo) => {
  const res = await apiClient.post('/batteries', batteryInfo);

  return res;
};
export { getAdminById, addBattery };
