import { useQuery } from '@tanstack/react-query';
import { getAllZones } from '../../apis/zone';

const useGetFilteredZone = () => {
  const { data } = useQuery(['zones', 'filteredZones'], getAllZones, {
    refetchOnWindowFocus: true,
  });

  const filteredZones = data?.filter((zone) => zone.status.bookable === true);

  return { filteredZones };
};

export default useGetFilteredZone;
