import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchCancelPayment } from '@/apis/payments';

import { useSnackBar } from '..';

const useCancelPayment = () => {
  // totalPrice가 안옴
  // 400 애러
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    ({ id, totalPrice }) => patchCancelPayment(id, totalPrice),
    {
      useErrorBoundary: (error) => error.response?.status >= 500,
      onSuccess: () => {
        openSnackBar('예약 취소가 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['payments', 'order-bookings']);
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

export default useCancelPayment;
