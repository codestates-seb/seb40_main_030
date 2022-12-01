import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { getFilteredStationsBySetTime } from '@/apis/stations';

const useHandleQueryError = (setTime) => {
  const { data, refetch } = useQuery(['error'], () =>
    getFilteredStationsBySetTime(setTime).catch(
      (err) => {
        if (err.response.status === 400) {
          return [];
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      },
      {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
    ),
  );

  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();

  useEffect(() => {
    const unsubscribe = queryCache.subscribe((event) => {
      const error = event?.query?.state?.error; // catch에서 throw한 error만 잡아냄

      console.log(error);
    });

    return unsubscribe;
  }, []);

  return { data, refetch };
};

export default useHandleQueryError;
