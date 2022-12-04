import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { getAdminById } from '@/apis/admin';
import {
  filterBatteryInfo,
  filterByBatteryState,
  getEachStateNum,
} from '@/components/Business/utils';
import { batteryFilterState } from '@/recoil/business';

const useGetBatteryList = () => {
  const selectedFilter = useRecoilValue(batteryFilterState);

  const selectFn = useCallback(
    (batteryInfo) => {
      let batteryList = filterBatteryInfo(batteryInfo); //util 매번 실행안하게 최적화 고민
      const countList = getEachStateNum(batteryList); //util 매번 실행안하게 최적화 고민
      if (selectedFilter !== 'total') {
        batteryList = filterByBatteryState(batteryList, selectedFilter);
      }
      return { batteryList, countList };
    },
    [selectedFilter],
  );

  const {
    data: batteryInfo,
    isLoading,
    isError,
    error,
  } = useQuery(['adminInfo'], () => getAdminById(), {
    select: selectFn,
  }); //임시로 관리자id 1

  return { batteryInfo, isLoading, isError, error };
};

export default useGetBatteryList;
