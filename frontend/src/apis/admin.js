import { apiClient } from './order';

//관리자 정보 가져옴
const getAdminById = async (adminId) => {
  const res = await apiClient.get(`/admins/${adminId}`);
  return res.data;
};

//관리자 배터리 추가
const addBattery = async (batteryInfo) => {
  const res = await apiClient.post('/batteries/', batteryInfo);

  return res;
};

//관리자 배터리 삭제
const deleteBattery = async (batteryId) => {
  const res = await apiClient.delete(`/batteries/${batteryId}`);
  console.log('deleteBattery실행 res', res);
  return res;
};
export { getAdminById, addBattery, deleteBattery };
