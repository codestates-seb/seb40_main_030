import { useRef, useState } from 'react';

import { useSnackBar } from '..';

const useExtendReservation = (returnTime: string, possibleEndTime: string) => {
  const [extendedDate, setExtendedDate] = useState<any>('');

  const { openSnackBar } = useSnackBar();
  const externalHourRef = useRef(null);
  const externalMinutesRef = useRef(null);

  const timeDifferenceInHour =
    possibleEndTime &&
    (new Date(possibleEndTime)?.getTime() - new Date(returnTime)?.getTime()) /
      (1000 * 60 * 60);

  const isValidExtendPeriod = (hoursRef: any, minutesRef: any) => {
    const hoursInMs =
      // @ts-ignore
      String(hoursRef.current?.value).padStart(2, '0') * 1000 * 60 * 60;
    const minutesInMs =
      // @ts-ignore
      String(minutesRef.current?.value).padStart(2, '0') * 1000 * 60;
    const newDateInMs =
      new Date(returnTime).getTime() + hoursInMs + minutesInMs;
    const possibleEndTimeInMs = new Date(possibleEndTime).getTime();

    if (possibleEndTimeInMs > newDateInMs) {
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
    setExtendedDate,
  };
};

export default useExtendReservation;
