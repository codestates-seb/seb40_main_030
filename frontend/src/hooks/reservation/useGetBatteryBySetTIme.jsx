import { useQuery } from '@tanstack/react-query';

import { getBatteryBySetTime } from '@/apis/stations';

const useGetBatteryBySetTime = (id, setTime) => {
  const { data, status } = useQuery(
    ['battery-by-setTime'],
    () => getBatteryBySetTime(id, setTime),
    {
      useErrorBoundary: true,
      suspense: true,
    },
  );

  return { data, status };
};

export default useGetBatteryBySetTime;
