import { useQuery } from '@tanstack/react-query';

import { getAllStations } from '@/apis/stations';

const useGetAllStations = (selector) => {
  const { data, isLoading, isSuccess } = useQuery(
    ['stations'],
    getAllStations,
    {
      selector,
      refetchOnWindowFocus: false,
    },
  );

  return { data, isLoading, isSuccess };
};

export default useGetAllStations;
