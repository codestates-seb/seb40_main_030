import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { BOOKING_TYPE, MESSAGE, TIME } from '@/constants';
import { initialReservationValue, reservationState } from '@/recoil/pagesState';

import { useSnackBar } from '..';
import { isSelectedTimeValid } from '@/utils';

type ReservationTime = {
  hours: number;
  minutes: number;
};

const useReservation = () => {
  const [reservation, setReservation] = useState(false);
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const { openSnackBar } = useSnackBar();
  const { startTime, startDate, endDate, bookingType } = reservationStatus;

  const isReservationValid = ({ hours, minutes }: ReservationTime) => {
    const currentTime = new Date().getTime();
    const startPoint = new Date(
      `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`,
    ).getTime();
    const endPoint = new Date(
      `${endDate.year}-${endDate.month}-${endDate.date} ${hours}:${minutes}`,
    ).getTime();

    let isValid = true;

    if (startPoint >= endPoint) {
      openSnackBar(MESSAGE.RESERVATION_NOT_SUCCEED);
      isValid = false;
    }

    if (endPoint - startPoint < TIME.HOUR) {
      openSnackBar(MESSAGE.MIN_BOOKING_PERIOD);
      isValid = false;
    }

    if (currentTime > startPoint) {
      setReservationStatus({
        ...initialReservationValue,
        bookingType: BOOKING_TYPE.MULTIPLE,
      });

      openSnackBar(MESSAGE.BEFORE_CURRENT_TIME);

      isValid = false;
    }

    return isValid;
  };

  const handleReservation = ({ hours, minutes }: ReservationTime) => {
    if (
      isSelectedTimeValid({ hours, minutes }) &&
      bookingType === BOOKING_TYPE.SINGLE
    ) {
      openSnackBar(MESSAGE.BEFORE_CURRENT_TIME);
      return;
    }

    if (!reservation) {
      setReservationStatus({
        ...reservationStatus,
        startTime: { hours, minutes },
      });
      setReservation(!reservation);
    }

    if (reservation) {
      if (isReservationValid({ hours, minutes })) {
        setReservationStatus({
          ...reservationStatus,
          returnTime: { hours, minutes },
          dateFixed: { ...reservationStatus.dateFixed, time: true },
        });
      }
    }
  };

  return {
    handleReservation,
    reservation,
  };
};

export default useReservation;
