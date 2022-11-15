import TimeTable from './TimeTable/TimeTable';
import Calendar from './Calendar/Calendar';
import * as S from './Reservation.style';
import { reservationState } from '../../../recoil/pagesState';
import { useRecoilValue } from 'recoil';

const Reservation = () => {
  const { dateFixed } = useRecoilValue(reservationState);
  const isCompleted = dateFixed?.date && dateFixed?.time;

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          {!isCompleted ? '예약시간 설정하기' : '예약시간 확인하기'}
        </S.Title>
      </S.Header>
      <Calendar />
      {!isCompleted ? (
        <TimeTable />
      ) : (
        <S.ResetButton onClick={() => localStorage.removeItem('dateFixed')}>
          예약정보 재설정
        </S.ResetButton>
      )}
    </S.Container>
  );
};

export default Reservation;
