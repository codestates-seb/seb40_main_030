import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getStation } from '@/apis/admin';
import {
  filterByStationState,
  filterStationInfo,
  getStationEachStateNum,
} from '@/components/Business/utils';
import { stationFilterState } from '@/recoil/business';

const useGetStationList = () => {
  const selectedFilter = useRecoilValue(stationFilterState);

  const selectFn = (stationInfo) => {
    let stationList = filterStationInfo(stationInfo);
    const countList = getStationEachStateNum(stationList);

    if (selectedFilter !== 'total') {
      stationList = filterByStationState(stationList, selectedFilter);
    }
    return { stationList, countList };
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
