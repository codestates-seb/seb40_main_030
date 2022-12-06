import { UndoIcon } from '@/assets';
import { BOOKING_TYPE } from '@/constants';
import { useCalendar, useReservation, useUndoReservation } from '@/hooks';
import { initialReservationValue } from '@/recoil/pagesState';

import BookingTypeBox from './BookingTypeBox/BookingTypeBox';
import Calendar from './Calendar/Calendar';
import SingleDateSelection from './DateSelection/SingleDateSelection';
import * as S from './Reservation.style';
import TimeTable from './TimeTable/TimeTable';

const Reservation = () => {
  const { reservationStatus, setReservationStatus } = useReservation();
  const { undoReservation } = useUndoReservation();
  const { currentDate, currentTime } = useCalendar();
  const { dateFixed, bookingType } = reservationStatus;
  const isCompleted = dateFixed?.date && dateFixed?.time;

  console.log('currentTime', currentTime);

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {!isCompleted ? '예약시간 설정하기' : '예약시간 확인하기'}
        </S.Title>
        <input
          type='image'
          src={UndoIcon}
          width={25}
          height={25}
          onClick={() => undoReservation()}
        />
      </S.Header>
      {!bookingType ? (
        <BookingTypeBox />
      ) : (
        <S.TableContainer>
          {bookingType === BOOKING_TYPE.MULTIPLE ? (
            <Calendar />
          ) : (
            <SingleDateSelection
              currentDate={currentDate}
              currentTime={currentTime}
              reservationStatus={reservationStatus}
            />
          )}

          {!isCompleted ? (
            <TimeTable />
          ) : (
            <S.ResetButton
              onClick={() => setReservationStatus(initialReservationValue)}
            >
              예약정보 재설정
            </S.ResetButton>
          )}
        </S.TableContainer>
      )}
    </S.Container>
  );
};

export default Reservation;
