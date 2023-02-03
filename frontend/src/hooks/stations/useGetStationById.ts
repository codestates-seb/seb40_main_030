import { useQuery } from '@tanstack/react-query';

import { getStationById } from '@/apis/stations';

const useGetStationById = (id: string) => {
  const { data, status } = useQuery(
    ['station', 'batteries', id],
    () => getStationById(id),
    {
      suspense: true,
    },
  );

  return { data, status };
};

export default useGetStationById;
