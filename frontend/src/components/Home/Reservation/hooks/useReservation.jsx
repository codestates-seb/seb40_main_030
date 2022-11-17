import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';

const useReservation = () => {
  const [reservation, setReservation] = useState(false);
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);

  // const setLocation = useSetRecoilState(currentLocationState);

  // useEffect(() => {
  //   if (reservationStatus?.singeDate) {
  //     setReservationStatus({
  //       ...reservationStatus,
  //       dateFixed: { ...reservationStatus.dateFixed, date: true },
  //     });
  //   }
  // }, []);

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

      // 로직 세부 분리가 필요한가 ?
      // setLocation({ latitude: 37.5963, longitude: 127.0844 });
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
