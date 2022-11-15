import { Datepicker } from '@meinefinsternis/react-horizontal-date-picker';
import { enUS } from 'date-fns/locale';
import { useRecoilValue } from 'recoil';
import useCalendar from '../../../../hooks/reservation/useCalendar';
import { reservationState } from '../../../../recoil/pagesState';
import * as S from './Calendar.style';

const Calendar = () => {
  const { date, handleChange } = useCalendar();
  const { startDate, endDate, startTime, endTime, dateFixed } =
    useRecoilValue(reservationState);

  return (
    <S.Wrapper>
      {!dateFixed.date ? (
        <Datepicker
          onChange={handleChange}
          locale={enUS}
          startValue={date.startValue}
          endValue={date.endValue}
        />
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
