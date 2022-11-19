import { useRecoilValue } from 'recoil';
import { reservationState } from '../../../../recoil/pagesState';
import { useReservation } from '../hooks';
import Counter from '../Counter/Counter';
import * as S from './TimeTable.style';
import { ShadowButton } from '../../../@commons';

const TimeTable = () => {
  const { hours, minutes } = useRecoilValue(reservationState);
  const { handleReservation, reservation, reserveInfo } = useReservation();

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
        <ShadowButton
          style={{ marginLeft: 20, marginTop: 30 }}
          content={reservation ? '반납 시간 정하기' : '예약 설정 완료'}
          onClick={() => handleReservation(hours, minutes)}
        ></ShadowButton>
      </>
    );
  }
};

export default TimeTable;
