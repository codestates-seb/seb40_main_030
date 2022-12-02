import { apiClient } from './stations';

const getPaymentsTable = async () => {
  const { data } = await apiClient.get('/payments');

  return data?.content;
};

const getAvailableExtendPeriod = async (id) => {
  const { data } = await apiClient.get(`/payments/${id}/extend`);

  return data;
};

export { getPaymentsTable, getAvailableExtendPeriod };
