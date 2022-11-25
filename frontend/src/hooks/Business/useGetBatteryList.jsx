import { useQuery } from '@tanstack/react-query';

import { getAdminById } from '@/apis/admin';

const useGetBatteryList = () => {
  const {
    data: batteryInfo,
    isLoading,
    isError,
    error,
  } = useQuery(['adminInfo'], () => getAdminById('1')); //임시로 관리자id 1

  return { batteryInfo, isLoading, isError, error };
};

export default useGetBatteryList;
