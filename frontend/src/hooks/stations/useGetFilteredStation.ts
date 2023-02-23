import { useQuery } from '@tanstack/react-query';

import { BatteryType } from '@/@types';
import { getSearchDataBySetTime } from '@/apis/stations';

import { useCheckValidReserveTable } from '..';

const useGetFilteredStation = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  const { data } = useQuery(
    ['stations'],
    () =>
      getSearchDataBySetTime({
        startTime: startPoint?.replace(' ', 'T'),
        returnTime: endPoint?.replace(' ', 'T'),
      }).catch((err) => {
        if (err.response.status === 400) {
          return null;
        }
        throw err;
      }),
    {
      select: (stations) =>
        stations?.filter(
          ({ batteries }: { batteries: BatteryType[] }) =>
            batteries.length !== 0,
        ),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
    },
  );

  return { data };
};

export default useGetFilteredStation;
