import { useQuery } from '@tanstack/react-query';

import { getStation } from '@/apis/admin';
import { filterStationInfo } from '@/components/Business/utils';

const useGetStationList = () => {
  const selectFn = (stationInfo) => {
    const stationList = filterStationInfo(stationInfo);
    return stationList;
  };
  const {
    data: stationInfo,
    isLoading,
    isError,
    error,
  } = useQuery(['stationInfo'], () => getStation(), {
    select: selectFn,
  });

  return { stationInfo, isLoading, isError, error };
};

export default useGetStationList;
