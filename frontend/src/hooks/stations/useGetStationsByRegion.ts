import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getStationsByRegion } from '@/apis/stations';
import { MESSAGE } from '@/constants';
import { currentLocationState } from '@/recoil/pagesState';

import { useCheckValidReserveTable, useCurrentAddress, useSnackBar } from '..';

const useGetStationsByRegion = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const currentLocation = useRecoilValue(currentLocationState);
  const { addressDetail } = useCurrentAddress(currentLocation);
  const [city, region] = addressDetail.split(' ');
  const { openSnackBar } = useSnackBar();

  const locationData = {
    startTime: startPoint?.replace(' ', 'T'),
    returnTime: endPoint?.replace(' ', 'T'),
    city,
    region,
  };

  const { data, refetch } = useQuery(
    ['searched-stations'],
    () =>
      getStationsByRegion(locationData).catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          if (startPoint !== null || endPoint !== null) {
            openSnackBar(MESSAGE.STATION_NOT_FOUND);
          }
          return [];
        }
        throw err;
      }),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
    },
  );

  return { data, refetch };
};

export default useGetStationsByRegion;
