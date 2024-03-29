import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { BOOKING_TYPE, MESSAGE, TIME } from '@/constants';
import { initialReservationValue, reservationState } from '@/recoil/pagesState';

import { useSnackBar } from '..';

const useReservation = () => {
  const [reservation, setReservation] = useState(false);
  const { openSnackBar } = useSnackBar();
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const { startTime, startDate, endDate, bookingType } = reservationStatus;

  const startPoint = new Date(
    `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`,
  ).getTime();

  const handleReservation = (hours: number, minutes: number) => {
    const currentHour = new Date().getHours();

    if (bookingType === BOOKING_TYPE.SINGLE) {
      if (currentHour >= hours + minutes / TIME.PERCENTAGE) {
        openSnackBar(MESSAGE.BEFORE_CURRENT_TIME);
        return;
      }
    }

    if (!reservation) {
      setReservationStatus({
        ...reservationStatus,
        startTime: { hours, minutes },
      });
    }

    if (reservation) {
      const endPoint = new Date(
        `${endDate.year}-${endDate.month}-${endDate.date} ${hours}:${minutes}`,
      ).getTime();

      if (startPoint >= endPoint) {
        openSnackBar(MESSAGE.RESERVATION_NOT_SUCCEED);
        return;
      }

      if (endPoint - startPoint < TIME.HOUR) {
        openSnackBar(MESSAGE.MIN_BOOKING_PERIOD);
        return;
      }

      if (bookingType === BOOKING_TYPE.MULTIPLE) {
        const currentTime = new Date().getTime();

        if (currentTime > startPoint) {
          setReservationStatus({
            ...initialReservationValue,
            bookingType: BOOKING_TYPE.MULTIPLE,
          });
          setReservation(!reservation);
          openSnackBar(MESSAGE.BEFORE_CURRENT_TIME);
          return;
        }
      }

      setReservationStatus({
        ...reservationStatus,
        returnTime: { hours, minutes },
        dateFixed: { ...reservationStatus.dateFixed, time: true },
      });
    }

    setReservation(!reservation);
  };

  return {
    handleReservation,
    reservation,
    reservationStatus,
    setReservationStatus,
  };
};

export default useReservation;
