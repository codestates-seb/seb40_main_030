import { useQuery } from '@tanstack/react-query';

import { getAllStations } from '@/apis/stations';

const useGetAllStations = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ['stations'],
    getAllStations,

    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  const stations: {
    id: number | string;
    name: string;
    location: string;
    confirmId: string | number;
  }[] = [];

  data?.map(
    ({
      id,
      name,
      location,
      confirmId,
    }: {
      id: number | string;
      name: string;
      location: string;
      confirmId: string | number;
    }) => {
      const data = { id, name, location, confirmId };

      stations.push(data);
    },
  );

  return { data, isLoading, isSuccess, stations };
};

export default useGetAllStations;
