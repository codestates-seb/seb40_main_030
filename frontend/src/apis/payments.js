import { apiClient } from './stations';

const getPaymentsTable = async () => {
  const { data } = await apiClient.get('/payments');

  return data?.content;
};

const getAvailableExtendPeriod = async (id) => {
  const { data } = await apiClient.get(`/payments/${id}/extend`);

  return data;
};

const patchExtendBookingPeriod = async (id, extendTime) => {
  const response = await apiClient
    .patch(`/payments/${id}/extend?extendTime=${extendTime}`)
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export { getPaymentsTable, getAvailableExtendPeriod, patchExtendBookingPeriod };
