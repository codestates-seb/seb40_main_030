import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getBatteryByLocationAndSetTime } from '@/apis/stations';
import { useCheckValidReserveTable } from '@/hooks';
import { currentLocationState } from '@/recoil/pagesState';

const useGetFilteredStationsBySetTime = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const currentLocation = useRecoilValue(currentLocationState);

  const { data, refetch } = useQuery(
    ['filtered-stations-setTime', 'stations'],
    () =>
      getBatteryByLocationAndSetTime(currentLocation, {
        startTime: startPoint?.replace(' ', 'T'),
        returnTime: endPoint?.replace(' ', 'T'),
      }).catch((err) => {
        const statusCode = err.response.status;
        if (statusCode === 400 || statusCode === 404) {
          return null;
        }
        throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
      }),
    {
      // 배터리 0 이 아닌 주유소만 보여주는 경우의 수
      select: (stations) =>
        stations?.filter(
          ({ availableBatteryCount }: { availableBatteryCount: number }) =>
            availableBatteryCount !== 0,
        ),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
      staleTime: 3000,
    },
  );

  return { data, refetch };
};

export default useGetFilteredStationsBySetTime;
