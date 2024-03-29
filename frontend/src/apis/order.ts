import axios from 'axios';

const apiClient = axios.create({
  // @ts-ignore
  baseURL: import.meta.env.REACT_APP_BASE_URL,
});

// 전체 주문 조회
const getAllOrders = async () => {
  const { data } = await apiClient.get('/api/orders');
  return data;
};

// 단일 주문 조회
const getOrderById = async (orderId: string) => {
  const { data } = await apiClient.get(`/api/orders/${orderId}`);

  return data;
};

// 주문 요청
const createNewOrder = async (newOrder: any) => {
  return await apiClient.post('/api/orders', newOrder);
};

// 주문 수정
const modifyOrder = async (orderId: string, modifiedOrder: any) => {
  const { data } = await apiClient.patch(
    `/api/orders/${orderId}`,
    modifiedOrder,
  );

  return data;
};

// 주문 취소
const deleteOrder = async (orderId: string) => {
  return await apiClient.delete(`/api/orders/${orderId}`);
};

export {
  apiClient,
  getAllOrders,
  getOrderById,
  createNewOrder,
  modifyOrder,
  deleteOrder,
};
