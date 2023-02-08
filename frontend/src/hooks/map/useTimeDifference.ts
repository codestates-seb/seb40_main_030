import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

const useTimeDifference = () => {
  const [timeDifference, setTimeDifference] = useState(0);
  const reservationStatus = useRecoilValue(reservationState);
  const { startDate, startTime, endDate, returnTime } = reservationStatus;

  const startPointToString = `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`;
  const endPointToString = `${endDate.year}-${endDate.month}-${endDate.date} ${returnTime.hours}:${returnTime.minutes}`;

  const timeDiffer = Math.floor(
    (new Date(endPointToString).getTime() -
      new Date(startPointToString).getTime()) /
      (60 * 60 * 1000),
  );
  const timeDifferByMin =
    (new Date(endPointToString).getTime() -
      new Date(startPointToString).getTime()) /
    (60 * 1000);

  useEffect(() => {
    setTimeDifference(timeDiffer);
  }, [timeDiffer]);

  const days = Math.floor(timeDifference / 24);
  const hours = Math.floor(timeDifference % 24);
  const minutes = Math.floor(timeDifferByMin % 60);

  const periodInMin = (days * 24 * 60 + hours * 60 + minutes) / 10;

  return { timeDifference, days, hours, minutes, periodInMin };
};

export default useTimeDifference;
