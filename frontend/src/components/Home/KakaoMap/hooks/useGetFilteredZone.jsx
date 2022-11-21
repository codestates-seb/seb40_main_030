import { useQuery } from '@tanstack/react-query';
import { getAllStations } from '../../../../apis/stations';

const useGetFilteredZone = () => {
  const { data } = useQuery(['zones', 'filteredZones'], getAllStations, {
    refetchOnWindowFocus: false,
  });

  return { filteredStations };
};

export default useGetFilteredZone;
