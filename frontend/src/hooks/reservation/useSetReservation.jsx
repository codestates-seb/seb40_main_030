import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  currentLocationState,
  reservationState,
} from '../../recoil/pagesState';

const useSetReservation = () => {
  const [reservation, setReservation] = useState(false);
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const setLocation = useSetRecoilState(currentLocationState);

  const handleReservation = (hours, minutes) => {
    if (!reservation) {
      setReservationStatus({
        ...reservationStatus,
        startTime: { hours, minutes },
      });
    }

    if (reservation) {
      setReservationStatus({
        ...reservationStatus,
        endTime: { hours, minutes },
        dateFixed: { ...reservationStatus.dateFixed, time: true },
      });

      // 로직 분리가 필요한가 ?
      setLocation({ latitude: 37.5963, longitude: 127.0844 });
    }

    setReservation(!reservation);
  };

  return { handleReservation, reservation, reservationStatus };
};

export default useSetReservation;