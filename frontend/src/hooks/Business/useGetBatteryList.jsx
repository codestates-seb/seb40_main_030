import { useQuery } from '@tanstack/react-query';
import { useState, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import { getAdminById } from '@/apis/admin';
import {
  filterBatteryInfo,
  filterByBatteryState,
  getEachStateNum,
} from '@/components/Business/utils';
import { filterState } from '@/recoil/business';

const useGetBatteryList = () => {
  const selectedFilter = useRecoilValue(filterState);

  const selectFn = useCallback(
    (batteryInfo) => {
      let batteryList = filterBatteryInfo(batteryInfo);
      const countList = getEachStateNum(batteryList);

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
  } = useQuery(['adminInfo'], () => getAdminById('1'), {
    select: selectFn,
  }); //임시로 관리자id 1

  return { batteryInfo, isLoading, isError, error };
};

export default useGetBatteryList;
