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
    let stationList = filterStation(adminInfo);
    const countList = stationListWithValidBattery(stationList);

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
  } = useQuery(['stationInfo'], () => getAdminById('1'), {
    select: selectFn,
  });

  return { stationInfo, isLoading, isError, error };
};

export default useGetStationList;
