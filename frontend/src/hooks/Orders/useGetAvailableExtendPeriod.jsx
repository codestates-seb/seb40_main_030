import { useQuery } from '@tanstack/react-query';

import { getAvailableExtendPeriod } from '@/apis/payments';

import { useSnackBar } from '..';

const useGetAvailablePeriod = (id) => {
  const { openSnackBar } = useSnackBar();
  const { data, refetch } = useQuery(
    ['extend-time'],
    () =>
      getAvailableExtendPeriod(id).catch((err) => {
        if (err.response.status === 404) {
          openSnackBar('연장 가능한 시간이 없습니다.');
          return null;
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  );

  return { data, refetch };
};

export default useGetAvailablePeriod;
