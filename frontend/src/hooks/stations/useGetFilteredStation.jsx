import { useQuery } from '@tanstack/react-query';

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
        } else {
          throw err;
        }
      }),
    {
      select: (stations) =>
        stations?.filter(
          ({ availableBatteryCount }) => availableBatteryCount !== 0,
        ),
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

  return { filteredStations };
};

export default useGetFilteredStation;
