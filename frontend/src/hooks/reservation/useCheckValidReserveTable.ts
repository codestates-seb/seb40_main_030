import { useRecoilValue } from 'recoil';

import { TIME } from '@/constants';
import { reservationState } from '@/recoil/pagesState';

const useCheckValidReserveTable = () => {
  const reservationStatus = useRecoilValue(reservationState);
  const { startTime, startDate, returnTime, endDate } = reservationStatus;

  const startPoint = `${startDate?.year}-${String(startDate?.month).padStart(
    2,
    '0',
  )}-${String(startDate?.date).padStart(2, '0')} ${String(
    startTime?.hours,
  ).padStart(2, '0')}:${String(startTime?.minutes).padStart(2, '0')}`;

  const endPoint = `${endDate.year}-${String(endDate.month).padStart(
    2,
    '0',
  )}-${String(endDate.date).padStart(2, '0')} ${String(
    returnTime.hours,
  ).padStart(2, '0')}:${String(returnTime.minutes).padStart(2, '0')}`;

  const timeDifference = parseInt(
    // @ts-ignore
    (new Date(endPoint).getTime() - new Date(startPoint).getTime()) /
      1000 /
      60 /
      1440,
  );

  if (startPoint.includes(TIME.NULL) || endPoint.includes(TIME.NULL)) {
    return { startPoint: null, endPoint: null, timeDifference };
  } else return { startPoint, endPoint, timeDifference };
};

export default useCheckValidReserveTable;
