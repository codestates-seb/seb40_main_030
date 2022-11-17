import { useQuery } from '@tanstack/react-query';
import { getAllZones } from '../../apis/zone';

const useGetAllZones = () => {
  const { data, isLoading, isSuccess } = useQuery(['zones'], getAllZones, {
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess };
};

export default useGetAllZones;
