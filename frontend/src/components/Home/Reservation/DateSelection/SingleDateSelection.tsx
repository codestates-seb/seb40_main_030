import { useEffect, useState } from 'react';

import { useSingleDateReservation } from '@/hooks';

import DateStatus from '../Calendar/DateStatus';
import * as S from '../Reservation.style';
import { ReservationDate, ReservationTime } from '../../../../@types/index';

const SingleDateSelection = ({
  currentDate,
}: {
  currentDate: ReservationDate;
}) => {
  const { handleSingleDateReservation, reservationStatus } =
    useSingleDateReservation(currentDate);
  const { startTime, returnTime } = reservationStatus;

  useEffect(() => {
    handleSingleDateReservation();
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
