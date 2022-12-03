import { ShadowButton } from '@/components/@commons';
import Counter from '@/components/Home/Reservation/Counter/Counter';
import {
  useExtendBookingPeriod,
  useExtendReservation,
  useGetAvailableExtendPeriod,
  useSnackBar,
} from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options';

const Extends = ({ endTime, paymentsId, setIsModalOpen }) => {
  const { handleBookingPeriod } = useExtendBookingPeriod();
  const { openSnackBar } = useSnackBar();
  const { data } = useGetAvailableExtendPeriod(paymentsId);
  const { possibleEndTime } = data;

  const {
    extendedDate,
    externalHourRef,
    externalMinutesRef,
    timeDifferenceInHour,
    isValidExtendPeriod,
  } = useExtendReservation(endTime, possibleEndTime);

  if (possibleEndTime) {
    return (
      <S.ContentWrapper>
        <span className='max-extend-time'>
          최대 연장가능 시간은{' '}
          <b>{timeDifferenceInHour >= 24 ? 24 : timeDifferenceInHour}</b> 시간
          입니다.
        </span>
        <ModalHeader title='배터리 대여기간 연장하기' />
        <DateBox endTime={endTime} fontSize='20px' />
        {!extendedDate && (
          <>
            <S.DateSelectContainer>
              <Counter
                min={0}
                max={23}
                range={1}
                externalRef={externalHourRef}
              />
              <Counter
                min={0}
                max={50}
                range={10}
                externalRef={externalMinutesRef}
              />
            </S.DateSelectContainer>
            <S.ExtendedDate>예정 반납 시간</S.ExtendedDate>
          </>
        )}
        {/* 이부분은 반납 클릭했을때 바뀌도록 */}
        {extendedDate && (
          <div style={{ marginTop: '20px' }}>
            <DateBox endTime={extendedDate} fontSize='20px' type='연장' />
          </div>
        )}
        <ShadowButton
          padding={'10px 5px'}
          content={extendedDate ? '대여시간 연장하기' : '연장시간 설정하기'}
          style={{ width: '70%', marginTop: '10%' }}
          shadow={false}
          onClick={() => {
            if (extendedDate) {
              handleBookingPeriod(paymentsId, extendedDate);
              setIsModalOpen(false);
              openSnackBar('대여시간 연장이 완료되었습니다.');
            } else {
              isValidExtendPeriod(externalHourRef, externalMinutesRef);
            }
          }}
        />
      </S.ContentWrapper>
    );
  }
};
export default Extends;
