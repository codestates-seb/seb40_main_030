import { useRecoilValue } from 'recoil';

import { ShadowButton } from '@/components/@commons';
import convertMinTo10Min from '@/components/@helper/utils/convertMiinTo10Min';
import { useReservation } from '@/hooks';
import { reservationState } from '@/recoil/pagesState';

import Counter from '../Counter/Counter';
import * as S from './TimeTable.style';

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
const TimeTable = () => {
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
      {/* 예약 설정완료 후에 status.bookable 이 true인 값만 찾기 */}
      <ShadowButton
        style={{ marginLeft: 20, marginTop: 30 }}
        content={
          reservation
            ? RESERVATION_CONFIRM_MESSAGE.RENT
            : RESERVATION_CONFIRM_MESSAGE.RETURN
        }
        onClick={() => handleReservation(hours, minutes)}
      ></ShadowButton>
    </>
  );
};

export default TimeTable;
