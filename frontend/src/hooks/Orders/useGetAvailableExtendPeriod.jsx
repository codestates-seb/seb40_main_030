import { useQuery } from '@tanstack/react-query';

import { getAvailableExtendPeriod } from '@/apis/payments';

const useGetAvailablePeriod = (id) => {
  const { data } = useQuery(
    ['extend-time'],
    () => getAvailableExtendPeriod(id),
    {
      refetchOnReconnect: false,
    },
  );

  return { data };
};

export default useGetAvailablePeriod;
