import { apiClient } from './stations';

const getPaymentsTable = async () => {
  const { data } = await apiClient.get('/payments');

  return data?.content;
};

export { getPaymentsTable };
