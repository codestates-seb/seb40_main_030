import { useQuery } from '@tanstack/react-query';

import { getBatteryByLocationAndSetTime } from '@/apis/stations';

import { useCheckValidReserveTable, useCurrentLocation } from '..';

const useGetStationsAroundMe = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { location } = useCurrentLocation();
  // 아래 로직은 에러 핸들링이 되는 로직 제데로 한번 찾아봐야함

  const { data, refetch } = useQuery(
    ['stations-around-me', 'stations'],
    () =>
      getBatteryByLocationAndSetTime(
        { latitude: location?.latitude, longitude: location?.longitude },
        {
          startTime: startPoint?.replace(' ', 'T'),
          returnTime: endPoint?.replace(' ', 'T'),
        },
      ).catch((err) => {
        if (err.response.status === 400) {
          return null;
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      // 배터리 0 이 아닌 주유소만 보여주는 경우의 수
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
    },
  );

  const filteredStations = [];

  data?.map(({ id, name, location, confirmId }) => {
    const data = { id, name, location, confirmId };

    filteredStations.push(data);
  });

  if (data !== null || data !== undefined) {
    return { data, refetch, filteredStations };
  }
};

export default useGetStationsAroundMe;
