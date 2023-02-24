import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';
import useSnackBar from '@/hooks/@common/useSnackBar';

const useGetHistoryList = () => {
  const { openSnackBar } = useSnackBar();

  const { data } = useQuery(
    ['order-history'],
    () =>
      getPaymentsTable().catch((err) => {
        const statusCode = err.response.status;
        if (statusCode === 400 || statusCode === 404) {
          openSnackBar(
            `데이터를 읽어올 수 없습니다. error code : ${statusCode}`,
          );

          return [];
        }
        throw err;
      }),
    {
      useErrorBoundary: false,
      suspense: true,
      select: (lists) =>
        lists.filter(
          (list: { payStatus: string }) => list.payStatus === 'HISTORY',
        ),
    },
  );

  return { data };
};

export default useGetHistoryList;
