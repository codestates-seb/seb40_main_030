import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';

const useReservation = () => {
  const [reservation, setReservation] = useState(false);
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const { startTime, startDate, endDate } = reservationStatus;

  const startPoint = new Date(
    `${startDate.year}-${startDate.month}-${startDate.date} ${startTime.hours}:${startTime.minutes}`
  ).getTime();

  const handleReservation = (hours, minutes) => {
    if (!reservation) {
      setReservationStatus({
        ...reservationStatus,
        startTime: { hours, minutes },
      });
    }

    if (reservation) {
      const endPoint = new Date(
        `${endDate.year}-${endDate.month}-${endDate.date} ${hours}:${minutes}`
      ).getTime();

      if (startPoint >= endPoint) {
        // modal 로 교체 해야함
        alert('설정하신 예약시간을 확인해 주세요.');
        return;
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
