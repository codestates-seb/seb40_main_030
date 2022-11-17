import { useQuery } from '@tanstack/react-query';
import { getAllZones } from '../../../../apis/zone';

const useGetAllZones = (selector) => {
  const { data, isLoading, isSuccess } = useQuery(['zones'], getAllZones, {
    selector,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, isSuccess };
};

export default useGetAllZones;
