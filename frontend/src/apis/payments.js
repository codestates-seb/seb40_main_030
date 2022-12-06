import { apiClient } from './stations';

const getPaymentsTable = async () => {
  const localToken = localStorage.getItem('accesstoken');
  const sessionToken = sessionStorage.getItem('accesstoken');

  const { data } = await apiClient.get('/payments', {
    headers: {
      Authorization: `Bearer ${
        localToken !== null
          ? localToken
          : sessionToken !== null
          ? sessionToken
          : null
      }`,
    },
  });

  return data.content;
};

const getAvailableExtendPeriod = async (id) => {
  const { data } = await apiClient.get(`/payments/${id}/extend`);

  return data;
};

const patchExtendBookingPeriod = async (id, extendTime) => {
  const response = await apiClient.patch(
    `/payments/${id}/extend?extendTime=${extendTime}`,
  );

  return response;
};

const patchReturnBattery = async (paymentId) => {
  const response = await apiClient.patch(`/payments/return/${paymentId}`);

  return response;
};

const patchCancelPayment = async (paymentId, totalPrice) => {
  const response = await apiClient.patch(
    `/kakaoPayCancel?paymentId=${paymentId}&cancel_amount=${totalPrice}`,
  );

  return response;
};

export {
  getPaymentsTable,
  getAvailableExtendPeriod,
  patchExtendBookingPeriod,
  patchReturnBattery,
  patchCancelPayment,
};
