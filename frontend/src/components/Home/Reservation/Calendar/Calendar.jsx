import { useRecoilState } from 'recoil';
import HorizontalDatePicker from './HorizontalDatePicker';
import * as S from './Calendar.style';
import { useReservation } from '../hooks';

const Calendar = () => {
  const { reservationStatus, setReservationStatus } = useReservation();
  const { startDate, endDate, startTime, endTime, dateFixed } =
    reservationStatus;

  return (
    // 단일예약 복수일 예약하기 따로
    <S.Wrapper>
      {!dateFixed?.date ? (
        <S.BookingContainer>
          <button
            onClick={() =>
              setReservationStatus({ ...reservationStatus, singeDate: true })
            }
          >
            단일
          </button>
          <button
            onClick={() =>
              setReservationStatus({ ...reservationStatus, singeDate: false })
            }
          >
            복수일
          </button>
        </S.BookingContainer>
      ) : (
        // <HorizontalDatePicker />
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
