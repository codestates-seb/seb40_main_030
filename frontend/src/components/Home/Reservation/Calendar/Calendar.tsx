import { useRecoilValue } from 'recoil';

import { reservationState } from '@/recoil/pagesState';

import * as S from './Calendar.style';
import DateStatus from './DateStatus';
import HorizontalDatePicker from './HorizontalDatePicker';

function Calendar() {
  const reservationStatus = useRecoilValue(reservationState);
  const { startDate, endDate, startTime, returnTime, dateFixed } =
    reservationStatus;

  return (
    <S.Wrapper>
      {!dateFixed?.date ? (
        <HorizontalDatePicker />
      ) : (
        <S.ReservationContainer>
          <DateStatus type='대여' date={startDate} time={startTime} />
          <DateStatus type='반납' date={endDate} time={returnTime} />
        </S.ReservationContainer>
      )}
    </S.Wrapper>
  );
}

export default Calendar;
