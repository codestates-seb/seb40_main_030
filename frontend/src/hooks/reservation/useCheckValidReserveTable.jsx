import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useCheckValidReserveTable = () => {
  const reservationStatus = useRecoilValue(reservationState);
  const { startTime, startDate, endTime, endDate } = reservationStatus;
  const startPoint = `${startDate.year}-${startDate.month}-${
    startDate.date
  } ${String(startTime.hours).padStart(2, '0')}:${String(
    startTime.minutes,
  ).padStart(2, '0')}`;

  const endPoint = `${endDate.year}-${endDate.month}-${endDate.date} ${String(
    endTime.hours,
  ).padStart(2, '0')}:${String(endTime.minutes).padStart(2, '0')}`;

  const timeDifference = parseInt(
    (new Date(endPoint).getTime() - new Date(startPoint).getTime()) /
      1000 /
      60 /
      1440,
  );

  return { startPoint, endPoint, timeDifference };
};

export default useCheckValidReserveTable;
