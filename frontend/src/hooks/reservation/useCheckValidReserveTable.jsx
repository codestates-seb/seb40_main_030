import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCheckValidReserveTable = () => {
  const reservationStatus = useRecoilValue(reservationState);
  const { startTime, startDate, endTime, endDate } = reservationStatus;
  const startPoint = `${startDate.year}-${startDate.month}-${startDate.date}T${startTime.hours}:${startTime.minutes}`;

  const endPoint = `${endDate.year}-${endDate.month}-${endDate.date}T${endTime.hours}:${endTime.minutes}`;

  const timeDifference = parseInt(
    (new Date(endPoint).getTime() - new Date(startPoint).getTime()) /
      1000 /
      60 /
      1440,
  );

  return { startPoint, endPoint, timeDifference };
};

export default useCheckValidReserveTable;
