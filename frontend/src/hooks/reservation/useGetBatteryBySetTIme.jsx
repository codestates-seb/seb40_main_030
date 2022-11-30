import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { getBatteryBySetTime } from '@/apis/stations';

const useGetBatteryBySetTime = (id, setTime) => {
  const navigate = useNavigate();

  const { data, status } = useQuery(
    ['battery-by-setTime'],
    () => getBatteryBySetTime(id, setTime),
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
