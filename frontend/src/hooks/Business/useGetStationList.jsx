import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { getAdminById } from '@/apis/admin';
import {
  filterByStationState,
  filterStation,
  stationListWithValidBattery,
} from '@/components/Business/utils';
import { stationFilterState } from '@/recoil/business';

const useGetStationList = () => {
  const selectedFilter = useRecoilValue(stationFilterState);

  const selectFn = (adminInfo) => {
    let stationList = filterStation(adminInfo); //util 매번 실행안하게 최적화 고민
    const countList = stationListWithValidBattery(stationList); //util 매번 실행안하게 최적화 고민

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
  } = useQuery(['stationInfo'], () => getAdminById(), {
    select: selectFn,
  });

  return { stationInfo, isLoading, isError, error };
};

export default useGetStationList;
