import { useQuery } from '@tanstack/react-query';
import { useSnackBar } from '..';
import { getPaymentsTable } from '@/apis/payments';

const useGetBookingList = () => {
  const { openSnackBar } = useSnackBar();
  const { data, status } = useQuery(
    ['order-bookings'],
    () =>
      getPaymentsTable().catch((err) => {
        const statusCode = err.response.status;

        if (statusCode === 400 || statusCode === 404) {
          openSnackBar(
            `데이터를 읽어올 수 없습니다. error code : ${statusCode}`,
          );
          return [];
        }
        throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
      }),
    {
      select: (lists) =>
        lists?.filter(
          (list: any) => list.payStatus === 'WAITING_FOR_RESERVATION',
        ),
      useErrorBoundary: true,
      suspense: true,
    },
  );

  return { data, status };
};

export default useGetBookingList;
