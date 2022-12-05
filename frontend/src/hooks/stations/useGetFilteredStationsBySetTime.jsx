import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getFilteredStationsBySetTime } from '@/apis/stations';
import { currentLocationState } from '@/recoil/pagesState';

import { useCheckValidReserveTable } from '..';

const useGetFilteredStationsBySetTime = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const currentLocation = useRecoilValue(currentLocationState);
  // 아래 로직은 에러 핸들링이 되는 로직 제데로 한번 찾아봐야함

  const { data, refetch } = useQuery(
    ['filtered-stations-setTime', 'stations'],
    () =>
      getFilteredStationsBySetTime(currentLocation, {
        startTime: startPoint?.replace(' ', 'T'),
        endTime: endPoint?.replace(' ', 'T'),
      }).catch((err) => {
        if (err.response.status === 400) {
          return null;
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      // select: (stations) =>
      //   stations?.filter(
      //     ({ availableBatteryCount }) => availableBatteryCount !== 0,
      //   ),
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      suspense: true,
    },
  );

  const filteredStations = [];

  data?.map(({ id, name, location, confirmId }) => {
    const data = { id, name, location, confirmId };

    filteredStations.push(data);
  });

  if (data !== null || data !== undefined) {
    console.log('예약시간 범위 설정 데이터 ', data);
    return { data, refetch, filteredStations };
  }
};

export default useGetFilteredStationsBySetTime;
