import { useState } from 'react';

import { TeongImg } from '@/assets';
import { ShadowButton } from '@/components/@common';
import { convertDate2ServerString } from '@/utils';
import Counter from '@/components/Home/Reservation/Counter/Counter';
import {
  useExtendBookingPeriod,
  useExtendReservation,
  useGetAvailableExtendPeriod,
  useSnackBar,
} from '@/hooks';

import DateBox from '../Content/DateBox';
import ModalHeader from '../Modal/ModalHeader';
import * as S from './Options.style';

const Extends = ({
  returnTime,
  paymentsId,
  setIsModalOpen,
}: {
  returnTime: string;
  paymentsId: number;
  setIsModalOpen: (arg: boolean) => void;
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleBookingPeriod } = useExtendBookingPeriod();
  const { openSnackBar } = useSnackBar();
  const { data } = useGetAvailableExtendPeriod(paymentsId);
  const {
    extendedDate,
    externalHourRef,
    externalMinutesRef,
    timeDifferenceInHour,
    isValidExtendPeriod,
    setExtendedDate,
  } = useExtendReservation(returnTime, data?.possibleEndTime);

  return data ? (
    <S.ContentWrapper>
      {!isSubmitted && (
        <span className='max-extend-time'>
          최대 연장가능 시간은{' '}
          <b>{timeDifferenceInHour >= 24 ? 24 : timeDifferenceInHour}</b> 시간
        </span>
      )}

      <ModalHeader
        title={
          isSubmitted ? '배터리 대여기간 연장 확인' : '배터리 대여기간 연장하기'
        }
      />
      <DateBox returnTime={returnTime} fontSize='20px' />
      {!extendedDate && (
        <>
          <S.DateSelectContainer>
            <Counter min={0} max={23} range={1} time={1} />
            <Counter min={0} max={50} range={10} time={10} />
          </S.DateSelectContainer>
        </>
      )}
      {extendedDate && (
        <div style={{ marginTop: '20px' }}>
          <DateBox returnTime={extendedDate} fontSize='20px' type='연장' />
        </div>
      )}

      {!isSubmitted && (
        <ShadowButton
          padding={'10px 5px'}
          content={extendedDate ? '대여시간 연장하기' : '연장시간 설정하기'}
          style={{ width: '70%', marginTop: '10%' }}
          shadow={false}
          onClick={() => {
            if (extendedDate) {
              handleBookingPeriod(
                paymentsId,
                convertDate2ServerString(extendedDate),
              );
              setIsModalOpen(false);
              openSnackBar('대여시간 연장이 완료되었습니다.');
              setIsSubmitted(!isSubmitted);
            } else {
              isValidExtendPeriod(externalHourRef, externalMinutesRef);
            }
          }}
        />
      )}

      {extendedDate && (
        <ShadowButton
          padding={'10px 5px'}
          content='시간 재설정 하기'
          style={{ width: '70%', marginTop: '10%' }}
          onClick={() => {
            setExtendedDate('');
            setIsSubmitted(false);
          }}
        />
      )}
    </S.ContentWrapper>
  ) : (
    <S.ContentWrapper>
      <S.ExtendNotPossibleContainer>
        <img src={TeongImg} alt='TeongImg' />
        <span>연장 가능한 시간이 없습니다.</span>
      </S.ExtendNotPossibleContainer>
    </S.ContentWrapper>
  );
};
export default Extends;
