import { useRecoilValue } from 'recoil';

import { BOOKING_TYPE } from '@/constants';
import { reservationState } from '@/recoil/pagesState';
import { convertFullDateToSingleProp } from '@/utils';

import * as S from './Stepper.style';

type Props = {
  startPoint: string;
  endPoint: string;
};

function Stepper({ startPoint, endPoint }: Props) {
  const reservationStatus = useRecoilValue(reservationState);

  const {
    month: startMonth,
    date: startDate,
    hour: startHour,
    minute: startMinute,
  } = convertFullDateToSingleProp(startPoint);
  const {
    month: endMonth,
    date: endDate,
    hour: endHour,
    minute: endMinute,
  } = convertFullDateToSingleProp(endPoint);

  return (
    <S.Wrapper>
      <S.Stepper>
        <S.Item>
          {reservationStatus.bookingType === BOOKING_TYPE.MULTIPLE ? (
            <S.Description>{`${
              startMonth > 12 ? 1 : startMonth
            }/${startDate}`}</S.Description>
          ) : (
            <S.Description>{`${startHour}:${startMinute}`}</S.Description>
          )}
        </S.Item>
        <S.Item>
          {reservationStatus.bookingType === BOOKING_TYPE.MULTIPLE ? (
            <S.Description>{`${
              endMonth > 12 ? 1 : endMonth
            }/${endDate}`}</S.Description>
          ) : (
            <S.Description>{`${endHour}:${endMinute}`}</S.Description>
          )}
        </S.Item>
      </S.Stepper>
    </S.Wrapper>
  );
}

export default Stepper;
