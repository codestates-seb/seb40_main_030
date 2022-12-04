import { useRef, useState } from 'react';

import { useSnackBar } from '..';

const useExtendReservation = (endTime, possibleEndTime) => {
  const [extendedDate, setExtendedDate] = useState('');

  const { openSnackBar } = useSnackBar();
  const externalHourRef = useRef(null);
  const externalMinutesRef = useRef(null);
  const timeDifferenceInHour =
    (new Date(possibleEndTime)?.getTime() - new Date(endTime)?.getTime()) /
    (1000 * 60 * 60);

  const isValidExtendPeriod = (hoursRef, minutesRef) => {
    const hoursInMs =
      String(hoursRef.current?.value).padStart(2, '0') * 1000 * 60 * 60;
    const minutesInMs =
      String(minutesRef.current?.value).padStart(2, '0') * 1000 * 60;
    const newDateInMs = new Date(endTime).getTime() + hoursInMs + minutesInMs;
    const possibleEndTimeInMs = new Date(possibleEndTime).getTime();

    if (newDateInMs > possibleEndTimeInMs) {
      openSnackBar('올바르지 않은 예약시간 입니다.');
      return false;
    }
    setExtendedDate(newDateInMs);

    return extendedDate;
  };

  return {
    externalHourRef,
    externalMinutesRef,
    timeDifferenceInHour,
    isValidExtendPeriod,
    extendedDate,
  };
};

export default useExtendReservation;
