import { useQuery } from '@tanstack/react-query';

import { getAllStations } from '@/apis/stations';

const useGetAllStations = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ['stations'],
    () =>
      getAllStations().catch((err: any) => {
        if (err.response.status === 404 || err.response.status === 400) {
          return null;
        }
      }),
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isLoading, isSuccess };
};

export default useGetAllStations;
