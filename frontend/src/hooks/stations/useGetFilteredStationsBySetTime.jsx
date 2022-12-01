import { useQuery } from '@tanstack/react-query';

import { getFilteredStationsBySetTime } from '@/apis/stations';

const useGetFilteredStationsBySetTime = (setTime) => {
  // 아래 로직은 에러 핸들링이 되는 로직 제데로 한번 찾아봐야함
  const { data, refetch } = useQuery(
    ['filtered-stations-setTime'],
    () =>
      getFilteredStationsBySetTime(setTime).catch((err) => {
        if (err.response.status === 400) {
          return null;
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      select: (stations) =>
        stations?.filter(
          ({ availableBatteryCount }) => availableBatteryCount !== 0,
        ),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      suspense: true,
    },
  );

  // const queryClient = useQueryClient();
  // const queryCache = queryClient.getQueryCache();

  // useEffect(() => {
  //   const unsubscribe = queryCache.subscribe((event) => {
  //     const error = event?.query?.state?.error; // catch에서 throw한 error만 잡아냄

  //     console.log(error);
  //   });

  //   return unsubscribe;
  // }, []);

  // const filtered = data.filter(({ batteries }) => batteries.length !== 0);

  // console.log(filtered);

  return { data, refetch };
};

export default useGetFilteredStationsBySetTime;
