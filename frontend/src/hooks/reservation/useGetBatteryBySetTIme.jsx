import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getBatteryBySetTime } from '@/apis/stations';

import { useCheckValidReserveTable } from '..';

const useGetBatteryBySetTime = (id) => {
  const navigate = useNavigate();
  const { startPoint, endPoint } = useCheckValidReserveTable();

  const { data, status } = useQuery(
    ['battery-by-setTime'],
    () =>
      getBatteryBySetTime(id, {
        startTime: startPoint?.replace(' ', 'T'),
        returnTime: endPoint?.replace(' ', 'T'),
      }),
    {
      onError: (err) => console.log(err),
      useErrorBoundary: true,
      suspense: true,
      retry: 1,
    },
  );

  if (status === 'error') {
    navigate('/');
  }

  return { data, status };
};

export default useGetBatteryBySetTime;
