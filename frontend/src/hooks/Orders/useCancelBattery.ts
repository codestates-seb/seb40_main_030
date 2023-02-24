import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postCancelPayment, patchChangePaymentStatus } from '@/apis/payments';

import { useSnackBar } from '..';

const useCancelMockPayment = () => {
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    (id: number) => patchChangePaymentStatus(id),
    {
      onSuccess: () => {
        openSnackBar('예약 취소가 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['order-bookings']);
      },
      onError: (err: any) => {
        openSnackBar(`예약 취소가 실패하였습니다. ${err.response.status}`);
      },
    },
  );

  const handleCancelMockPayment: (id: number) => void = (id) => mutate(id);

  return { handleCancelMockPayment };
};

const useCancelPayment = () => {
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['payments', 'order-inUse'],
    (id: number) => postCancelPayment(id),
    {
      onSuccess: () => {
        openSnackBar('예약 취소가 정상적으로 완료되었습니다.');
        return queryClient.invalidateQueries(['order-bookings']);
      },
      onError: (err) => {
        openSnackBar(`예약 취소가 실패하였습니다. ${err.response.status}`);
      },
    },
  );

  const handleCancelPayment = (id: number) => mutate(id);

  return { handleCancelPayment };
};

export { useCancelPayment, useCancelMockPayment };
