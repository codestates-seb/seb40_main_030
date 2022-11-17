import { useRecoilValue } from 'recoil';
import useSetReservation from '../../../../hooks/reservation/useSetReservation';
import { reservationState } from '../../../../recoil/pagesState';

import Counter from '../../../@commons/Counter/Counter';
import * as S from './TimeTable.style';

const TimeTable = () => {
  const { hours, minutes } = useRecoilValue(reservationState);

  const { handleReservation, reservation, reserveInfo } = useSetReservation();

  if (!reserveInfo?.time) {
    return (
      <>
        <S.Wrapper>
          <S.StatusContainer>
            <S.RentalStatus>{reservation ? '반납' : '대여'}</S.RentalStatus>
            <S.TimeLineContainer>
              <Counter type='hours' min={1} max={24} range={1} />
              <span>시</span>
              <Counter type='minutes' min={0} max={50} range={10} />
              <span>분</span>
            </S.TimeLineContainer>
          </S.StatusContainer>
        </S.Wrapper>
        {/* 예약 설정완료 후에 status.bookable 이 true인 값만 찾기 */}
        <button
          style={{
            width: 100,
            height: 30,
            border: '1px solid black',
          }}
          onClick={() => handleReservation(hours, minutes)}
        >
          {reservation ? '설정하기' : '반납 시간'}
        </button>
      </>
    );
  }
};

export default TimeTable;
