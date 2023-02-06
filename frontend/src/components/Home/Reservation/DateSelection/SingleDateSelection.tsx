import { useEffect, useState } from 'react';

import { useSingleDateReservation } from '@/hooks';

import DateStatus from '../Calendar/DateStatus';
import * as S from '../Reservation.style';
import { ReservationDate, ReservationTime } from '../../../../@types/index';

const SingleDateSelection = ({
  currentDate,
  currentTime,
}: {
  currentDate: ReservationDate;
  currentTime: ReservationTime;
}) => {
  const [time, setTime] = useState({
    startTime: currentTime,
    returnTime: { hours: 0, minutes: 0 },
  });
  const { handleSingleDateReservation, reservationStatus } =
    useSingleDateReservation(currentDate);
  const { startTime, returnTime } = reservationStatus;

  const handleTime = () => {
    if (startTime.hours || startTime.minutes) {
      setTime({ ...time, startTime });
    }

    if (returnTime.hours || returnTime.minutes) {
      setTime({ ...time, returnTime });
    }
  };

  useEffect(() => {
    handleSingleDateReservation();
    handleTime();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.ReservationContainer>
      <DateStatus type='대여' date={currentDate} time={startTime} />
      <DateStatus
        type='반납'
        date={currentDate}
        time={{
          hours: returnTime.hours,
          minutes: returnTime.minutes,
        }}
      />
    </S.ReservationContainer>
  );
};

export default SingleDateSelection;
