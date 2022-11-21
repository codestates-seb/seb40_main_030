import { useRecoilValue } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';

const useCheckValidReserveTable = () => {
  const reservationStatus = useRecoilValue(reservationState);
  const { startTime, startDate, endTime, endDate } = reservationStatus;
  const startPoint = new Date(
    `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`
  );
  const endPoint = new Date(
    `${endDate.year}-${endDate.month}-${endDate.date} ${endTime.hours}:${endTime.minutes}`
  );

  const timeDifference = parseInt(
    (endPoint.getTime() - startPoint.getTime()) / 1000 / 60 / 1440
  );

  return { startPoint, endPoint, timeDifference };
};

export default useCheckValidReserveTable;
