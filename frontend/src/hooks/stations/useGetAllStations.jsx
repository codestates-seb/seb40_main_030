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

  const stations = [];

  data?.map(({ id, name, location, confirmId }) => {
    const data = { id, name, location, confirmId };

    stations.push(data);
  });

  return { data, isLoading, isSuccess, stations };
};

export default useGetAllStations;
