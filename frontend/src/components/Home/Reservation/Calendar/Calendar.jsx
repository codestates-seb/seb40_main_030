import { useRecoilValue } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';
import HorizontalDatePicker from './HorizontalDatePicker';
import * as S from './Calendar.style';

const Calendar = () => {
  const { startDate, endDate, startTime, endTime, dateFixed } =
    useRecoilValue(reservationState);

  return (
    <S.Wrapper>
      {!dateFixed?.date ? (
        <HorizontalDatePicker />
      ) : (
        <S.ReservationContainer>
          <S.ReservationBox>
            <S.DateStatus>대여</S.DateStatus>
            <span>{`${startDate?.month} 월 ${startDate?.date} 일 ${startTime?.hours} 시 ${startTime?.minutes} 분 부터`}</span>
          </S.ReservationBox>
          <S.ReservationBox>
            <S.DateStatus>반납</S.DateStatus>
            <span>{`${endDate?.month} 월 ${endDate?.date} 일 ${endTime?.hours} 시 ${endTime?.minutes} 분 까지`}</span>
          </S.ReservationBox>
        </S.ReservationContainer>
      )}
    </S.Wrapper>
  );
};

export default Calendar;
