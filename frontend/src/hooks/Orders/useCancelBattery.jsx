import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCancelPayment, patchChangePaymentStatus } from '@/apis/payments';

import { useSnackBar } from '..';

const useCancelMockPayment = () => {
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    (id) => patchChangePaymentStatus(id),
    {
      useErrorBoundary: (error) => error.response?.status >= 500,
      onSuccess: () => {
        openSnackBar('예약 취소가 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['order-bookings']);
      },
      onError: (err) => {
        openSnackBar(`예약 취소가 실패하였습니다. ${err.response.status}`);
        return;
      },
    },
  );

  const handleCancelMockPayment = (id) => {
    mutate(id);
  };

  return { handleCancelMockPayment };
};

const useCancelPayment = () => {
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    ({ id, totalPrice }) => postCancelPayment(id, totalPrice),
    {
      useErrorBoundary: (error) => error.response?.status >= 500,
      onSuccess: () => {
        openSnackBar('예약 취소가 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['order-bookings']);
      },
      onError: (err) => {
        openSnackBar(`예약 취소가 실패하였습니다. ${err.response.status}`);
        return;
      },
    },
  );

  const handleCancelPayment = (id, totalPrice) => {
    mutate({ id, totalPrice });
  };

  return { handleCancelPayment };
};

export { useCancelPayment, useCancelMockPayment };
