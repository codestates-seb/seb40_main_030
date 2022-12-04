import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchExtendBookingPeriod } from '@/apis/payments';
import convertDate2ServerString from '@/components/@helper/utils/convertDate2ServerString';

const useExtendBookingPeriod = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['batteries'],
    ({ id, extendTime }) => patchExtendBookingPeriod(id, extendTime),
    {
      useErrorBoundary: false,
      onSuccess: () => queryClient.invalidateQueries(['batteries']),
    },
  );

  const handleBookingPeriod = (id, extendTime) => {
    const date = convertDate2ServerString(extendTime);
    mutate({ id, date });
  };

  return { handleBookingPeriod };
};

export default useExtendBookingPeriod;
