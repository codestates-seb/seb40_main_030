import { useQuery } from '@tanstack/react-query';

import { getStationById } from '@/apis/stations';

const useGetStationById = (id) => {
  const { data, status } = useQuery(['station', 'batteries', id], () =>
    getStationById(id),
  );

  return { data, status };
};

export default useGetStationById;
