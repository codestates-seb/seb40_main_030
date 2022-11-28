import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { TIME } from '@/constants';
import { reservationState } from '@/recoil/pagesState';

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

  const handleReservation = (hours, minutes) => {
    const currentHour = new Date().getHours();

    if (bookingType === 'single') {
      if (currentHour >= hours + minutes / TIME.PERCENTAGE) {
        openSnackBar('현재시간보다 이전 시점입니다.');
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
        openSnackBar('설정하신 예약시간을 확인해 주세요.');
        return;
      }

      if (endPoint - startPoint < TIME.HOUR) {
        openSnackBar('최소 대여시간은 한시간입니다.');
        return;
      }

      if (bookingType === 'multiple') {
        const currentTime = new Date().getTime();

        if (currentTime > startPoint) {
          openSnackBar('현재시간보다 이전 시점입니다.');
          return;
        }
      }

      setReservationStatus({
        ...reservationStatus,
        endTime: { hours, minutes },
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
