import { useQuery } from '@tanstack/react-query';

import { getAvailableExtendPeriod } from '@/apis/payments';

import { useSnackBar } from '..';

const useGetAvailablePeriod = (id: number) => {
  const { openSnackBar } = useSnackBar();
  const { data, status, refetch } = useQuery(
    ['extend-time'],
    () =>
      getAvailableExtendPeriod(id).catch((err) => {
        const statusCode = err.response.status;

        if (statusCode === 404) {
          openSnackBar('연장 가능한 시간이 없습니다.');
          return null;
        }

        openSnackBar(`데이터를 읽어올 수 없습니다. ${statusCode} `);
        return null;
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  return { data, status, refetch };
};

export default useGetAvailablePeriod;
