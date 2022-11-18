import { useEffect, useState } from 'react';
import DateStatus from '../Calendar/DateStatus';
import { useSingleDateReservation } from '../hooks';
import * as S from '../Reservation.style';

const SingleDateSelection = ({ currentDate, currentTime }) => {
  const [time, setTime] = useState({ startTime: currentTime });
  const { handleSingleDateReservation, reservationStatus } =
    useSingleDateReservation(currentDate, currentTime);
  const { startTime, endTime } = reservationStatus;

  const handleTime = () => {
    if (startTime.hours && startTime.minutes) {
      setTime({ startTime });
    }

    if (endTime.hours && endTime.minutes) {
      setTime({ ...time, endTime });
    }
  };

  useEffect(() => {
    handleSingleDateReservation();
  }, []);

  useEffect(() => {
    handleTime();
  }, []);

  return (
    <S.ReservationContainer>
      <DateStatus content='대여' date={currentDate} time={startTime} />
      <DateStatus
        content='반납'
        date={currentDate}
        time={{
          hours: endTime.hours,
          minutes: endTime.minutes,
        }}
      />
    </S.ReservationContainer>
  );
};

export default SingleDateSelection;
