import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/stations';

const useGetHistoryList = () => {
  const { data } = useQuery(['order-history'], getPaymentsTable, {
    useErrorBoundary: false,
    suspense: true,
    select: (lists) => lists.filter((list) => list.payStatus === 'HISTORY'),
  });

  return { data };
};

export default useGetHistoryList;
