import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchExtendBookingPeriod } from '@/apis/payments';
import useSnackBar from '@/hooks/@common/useSnackBar';

const useExtendBookingPeriod = () => {
  const { openSnackBar } = useSnackBar();
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['batteries', 'order-inUse'],
    ({ id, extendTime }: { id: number; extendTime: string }) =>
      patchExtendBookingPeriod(id, extendTime),
    {
      onSuccess: () => {
        openSnackBar(`연장이 성공적으로 완료되었습니다.`);
        queryClient.invalidateQueries(['order-inUse']);
      },
      onError: (err) => {
        openSnackBar(`연장에 실패하였습니다. ${err.response.status}`);
      },
    },
  );

  const handleBookingPeriod = (id: number, extendTime: string) => {
    mutate({ id, extendTime });
  };

  return { handleBookingPeriod };
};

export default useExtendBookingPeriod;
