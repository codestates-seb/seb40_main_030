import { useEffect, useState } from 'react';

import { useSingleDateReservation } from '@/hooks';

import DateStatus from '../Calendar/DateStatus';
import * as S from '../Reservation.style';

const SingleDateSelection = ({ currentDate, currentTime }) => {
  const [time, setTime] = useState({ startTime: currentTime });
  const { handleSingleDateReservation, reservationStatus } =
    useSingleDateReservation(currentDate, currentTime);
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
      <DateStatus content='대여' date={currentDate} time={startTime} />
      <DateStatus
        content='반납'
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
