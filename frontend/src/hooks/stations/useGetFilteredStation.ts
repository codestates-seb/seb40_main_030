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
          ({ availableBatteryCount }: { availableBatteryCount: number }) =>
            availableBatteryCount !== 0,
        ),
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      suspense: true,
    },
  );

  // const filteredStations: {
  //   id: number | string;
  //   name: string;
  //   location: string;
  //   confirmId: string | number;
  // }[] = [];

  // data?.map(
  //   ({
  //     id,
  //     name,
  //     location,
  //     confirmId,
  //   }: {
  //     id: number | string;
  //     name: string;
  //     location: string;
  //     confirmId: string | number;
  //   }) => {
  //     const data = { id, name, location, confirmId };

  //     filteredStations.push(data);
  //   },
  // );

  return { data };
};

export default useGetFilteredStation;
