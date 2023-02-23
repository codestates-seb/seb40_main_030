import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/payments';
import { useSnackBar } from '@/hooks';

const useGetInUseList: any = () => {
  const { openSnackBar } = useSnackBar();
  const { data, status } = useQuery(
    ['order-inUse'],
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
      useErrorBoundary: true,
      suspense: true,
      select: (lists) =>
        lists
          .filter((list: any) => list.payStatus === 'USE_NOW')
          .sort(
            (a: any, b: any) =>
              new Date(a.returnTime).getTime() -
              new Date(b.returnTime).getTime(),
          ),
    },
  );

  return { data, status };
};

export default useGetInUseList;
