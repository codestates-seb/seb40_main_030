import { useRecoilState } from 'recoil';

import { UndoIcon } from '@/assets';
import { BOOKING_TYPE } from '@/constants';
import { useCalendar, useUndoReservation } from '@/hooks';
import { initialReservationValue, reservationState } from '@/recoil/pagesState';

import BookingTypeBox from './BookingTypeBox/BookingTypeBox';
import Calendar from './Calendar/Calendar';
import SingleDateSelection from './DateSelection/SingleDateSelection';
import * as S from './Reservation.style';
import TimeTable from './TimeTable/TimeTable';

const RESERVATION_MESSAGE = {
  SET: '예약시간 설정하기',
  CONFIRM: '예약시간 확인하기',
};

function Reservation() {
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);
  const { undoReservation } = useUndoReservation();
  const { currentDate } = useCalendar();
  const { dateFixed, bookingType } = reservationStatus;
  const isCompleted = dateFixed?.date && dateFixed?.time;

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {!isCompleted ? RESERVATION_MESSAGE.SET : RESERVATION_MESSAGE.CONFIRM}
        </S.Title>
        <input
          type='image'
          src={UndoIcon}
          width={25}
          height={25}
          onClick={undoReservation}
          alt='undoImage'
        />
      </S.Header>
      {!bookingType ? (
        <BookingTypeBox />
      ) : (
        <S.TableContainer>
          {bookingType === BOOKING_TYPE.MULTIPLE ? (
            <Calendar />
          ) : (
            <SingleDateSelection currentDate={currentDate} />
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
}

export default Reservation;
