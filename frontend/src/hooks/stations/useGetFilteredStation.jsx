import { useQuery } from '@tanstack/react-query';

import { getAllStations } from '@/apis/stations';

const useGetFilteredStation = (keyword) => {
  const { data } = useQuery(['stations'], getAllStations, {
    select: (stations) =>
      stations.filter((station) => station.name.includes(keyword)),
  });

  return { data };
};

export default useGetFilteredStation;
