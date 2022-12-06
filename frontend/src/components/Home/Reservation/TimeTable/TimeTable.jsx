import { useRecoilValue } from 'recoil';

import { ShadowButton } from '@/components/@commons';
import convertMinTo10Min from '@/components/@helper/utils/convertMiinTo10Min';
import { useReservation } from '@/hooks';
import { reservationState } from '@/recoil/pagesState';

import Counter from '../Counter/Counter';
import * as S from './TimeTable.style';

const TimeTable = () => {
  const { hours, minutes } = useRecoilValue(reservationState);
  const { handleReservation, reservation, reserveInfo } = useReservation();

  convertMinTo10Min(new Date().getMinutes());
  if (!reserveInfo?.time) {
    return (
      <>
        <S.Wrapper>
          <S.StatusContainer>
            <S.RentalStatus>{reservation ? '반납' : '대여'}</S.RentalStatus>
            <S.TimeLineContainer>
              <Counter
                type='hours'
                min={1}
                max={23}
                range={1}
                time={new Date().getHours()}
              />
              <span>시</span>
              <Counter
                type='minutes'
                min={0}
                max={50}
                range={10}
                time={convertMinTo10Min(new Date().getMinutes())}
              />
              <span>분</span>
            </S.TimeLineContainer>
          </S.StatusContainer>
        </S.Wrapper>
        {/* 예약 설정완료 후에 status.bookable 이 true인 값만 찾기 */}
        <ShadowButton
          style={{ marginLeft: 20, marginTop: 30 }}
          content={reservation ? '반납시간 설정 완료' : '대여시간 설정 완료'}
          onClick={() => handleReservation(hours, minutes)}
        ></ShadowButton>
      </>
    );
  }
};

export default TimeTable;
