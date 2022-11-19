import HorizontalDatePicker from './HorizontalDatePicker';
import * as S from './Calendar.style';
import { useReservation } from '../hooks';
import DateStatus from './DateStatus';

const Calendar = () => {
  const { reservationStatus } = useReservation();
  const { startDate, endDate, startTime, endTime, dateFixed } =
    reservationStatus;

  return (
    <S.Wrapper>
      {!dateFixed?.date ? (
        <HorizontalDatePicker />
      ) : (
        <S.ReservationContainer>
          <DateStatus content='대여' date={startDate} time={startTime} />
          <DateStatus content='반납' date={endDate} time={endTime} />
        </S.ReservationContainer>
      )}
    </S.Wrapper>
  );
};

export default Calendar;
