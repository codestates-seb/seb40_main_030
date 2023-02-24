import { useQuery } from '@tanstack/react-query';

import { BatteryType } from '@/@types';
import { getSearchDataBySetTime } from '@/apis/stations';
import { useSnackBar } from '@/hooks';

import { useCheckValidReserveTable } from '..';

const useGetFilteredStation = () => {
  const { openSnackBar } = useSnackBar();
  const { startPoint, endPoint } = useCheckValidReserveTable();

  const { data } = useQuery(
    ['stations'],
    () =>
      getSearchDataBySetTime({
        startTime: startPoint?.replace(' ', 'T'),
        returnTime: endPoint?.replace(' ', 'T'),
      }).catch((err) => {
        if (err.response.status === 400 || err.response.status === 404) {
          openSnackBar('결과를 찾을 수 없습니다.');

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
