import { useQuery } from '@tanstack/react-query';

import { getPaymentsTable } from '@/apis/stations';

const useGetInUseList = () => {
  const { data, status } = useQuery(['order-inUse'], getPaymentsTable, {
    useErrorBoundary: false,
    suspense: true,
    select: (lists) => lists.filter((list) => list.payStatus === 'USE_NOW'),
  });

  return { data, status };
};

export default useGetInUseList;
