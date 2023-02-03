import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { getBatteryByLocationAndSetTime } from '@/apis/stations';
import { DEFAULT_LOCATION } from '@/constants';
import { currentLocationState } from '@/recoil/pagesState';

import { useCheckValidReserveTable, useCurrentAddress } from '..';

const useGetFilteredStationsBySetTime = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const currentLocation = useRecoilValue(currentLocationState);
  const latitude = currentLocation?.latitude || DEFAULT_LOCATION?.latitude;
  const longitude = currentLocation?.longitude || DEFAULT_LOCATION?.longitude;

  const { addressDetail } = useCurrentAddress({ latitude, longitude });

  useEffect(() => {
    const si = addressDetail.split(' ')[0];
    const gu = addressDetail.split(' ')[1];

    console.log(si, gu);
  }, [addressDetail]);

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
        } else {
          throw err; // 반드시 모든 케이스에 대한 error 처리를 해줘야 queryCache가 오류를 인식한다
        }
      }),
    {
      // 배터리 0 이 아닌 주유소만 보여주는 경우의 수
      select: (stations) =>
        stations?.filter(
          ({ availableBatteryCount }) => availableBatteryCount !== 0,
        ),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
      staleTime: 3000,
    },
  );

  if (data !== null || data !== undefined) {
    return { data, refetch };
  }
};

export default useGetFilteredStationsBySetTime;
