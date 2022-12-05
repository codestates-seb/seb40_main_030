import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';

import { useSnackBar } from '..';

const useGetHistoryList = () => {
  const { openSnackBar } = useSnackBar();

  const { data } = useQuery(
    ['order-history'],
    () =>
      getPaymentsTable().catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          openSnackBar('데이터를 읽어올 수 없습니다.');

          return [];
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      useErrorBoundary: false,
      suspense: true,
      select: (lists) => lists.filter((list) => list.payStatus === 'HISTORY'),
    },
  );

  return { data };
};

export default useGetHistoryList;
