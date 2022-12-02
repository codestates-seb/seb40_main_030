import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';

const useGetBookingList = () => {
  const { data, status } = useQuery(['order-bookings'], getPaymentsTable, {
    select: (lists) =>
      lists?.filter((list) => list.payStatus === 'WAITING_FOR_RESERVATION'),
    useErrorBoundary: true,
    suspense: true,
  });

  return { data, status };
};

export default useGetBookingList;
