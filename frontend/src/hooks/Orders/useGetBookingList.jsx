import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';

const useGetBookingList = () => {
  const { data, status } = useQuery(
    ['order-bookings'],
    () =>
      getPaymentsTable().catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          return [];
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      select: (lists) =>
        lists?.filter((list) => list.payStatus === 'WAITING_FOR_RESERVATION'),
      useErrorBoundary: true,
      suspense: true,
    },
  );

  return { data, status };
};

export default useGetBookingList;
