import { useQuery } from '@tanstack/react-query';

import { getAllStations } from '@/apis/stations';

const useGetAllStations = () => {
  // 리팩터링
  // stations에서 정보를 빼서 내보낼 필요가 있는가 검증

  const { data, isLoading, isSuccess } = useQuery(
    ['stations'],
    getAllStations,
    {
      refetchOnWindowFocus: false,
      suspense: true,
    },
  );

  return { data, isLoading, isSuccess };
};

export default useGetAllStations;
