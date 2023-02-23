import { useRecoilValue } from 'recoil';

import { ShadowButton } from '@/components/@common';
import { useReservation } from '@/hooks';
import { reservationState } from '@/recoil/pagesState';
import { convertMinTo10Min } from '@/utils';

import * as S from './TimeTable.style';
import Counter from '../Counter/Counter';

const RESERVATION_MAGIC_NUMBERS = {
  HOURS: {
    MIN: 1,
    MAX: 24,
    RANGE: 1,
  },
  MINUTES: {
    MIN: 0,
    MAX: 50,
    RANGE: 10,
  },
};

const RESERVATION_CONFIRM_MESSAGE = {
  RENT: '반납시간 설정 완료',
  RETURN: '대여시간 설정 완료',
};
function TimeTable() {
  const { hours, minutes } = useRecoilValue(reservationState);
  const { handleReservation, reservation } = useReservation();

  return (
    <>
      <S.Wrapper>
        <S.StatusContainer>
          <S.RentalStatus>{reservation ? '반납' : '대여'}</S.RentalStatus>
          <S.TimeLineContainer>
            <Counter
              type='hours'
              min={RESERVATION_MAGIC_NUMBERS.HOURS.MIN}
              max={RESERVATION_MAGIC_NUMBERS.HOURS.MAX}
              range={RESERVATION_MAGIC_NUMBERS.HOURS.RANGE}
              time={new Date().getHours()}
            />
            <span>시</span>
            <Counter
              type='minutes'
              min={RESERVATION_MAGIC_NUMBERS.MINUTES.MIN}
              max={RESERVATION_MAGIC_NUMBERS.MINUTES.MAX}
              range={RESERVATION_MAGIC_NUMBERS.MINUTES.RANGE}
              time={convertMinTo10Min(new Date().getMinutes())}
            />
            <span>분</span>
          </S.TimeLineContainer>
        </S.StatusContainer>
      </S.Wrapper>
      <ShadowButton
        style={{ marginLeft: 20, marginTop: 30 }}
        content={
          reservation
            ? RESERVATION_CONFIRM_MESSAGE.RETURN
            : RESERVATION_CONFIRM_MESSAGE.RENT
        }
        onClick={() => handleReservation({ hours, minutes })}
      />
    </>
  );
}

export default TimeTable;
