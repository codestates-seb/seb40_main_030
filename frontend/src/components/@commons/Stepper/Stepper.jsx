import { useReservation } from '@/hooks';
import useConvertDate from '@/hooks/commons/useConvertDate';

import * as S from './Stepper.style';

const Stepper = ({ startPoint, endPoint, status }) => {
  const { reservationStatus } = useReservation();

  const {
    month: startMonth,
    date: startDate,
    hour: startHour,
    minute: startMinute,
  } = useConvertDate(startPoint);
  const {
    month: endMonth,
    date: endDate,
    hour: endHour,
    minute: endMinute,
  } = useConvertDate(endPoint);

  return (
    <S.Wrapper>
      <S.Stepper>
        <S.Item status={status}>
          {reservationStatus.bookingType === 'multiple' ? (
            <S.Description>{`${startMonth}/${startDate}`}</S.Description>
          ) : (
            <S.Description>{`${startHour}:${startMinute}`}</S.Description>
          )}
        </S.Item>

        <S.Item status={status}>
          {reservationStatus.bookingType === 'multiple' ? (
            <S.Description>{`${endMonth}/${endDate}`}</S.Description>
          ) : (
            <S.Description>{`${endHour}:${endMinute}`}</S.Description>
          )}
        </S.Item>
      </S.Stepper>
    </S.Wrapper>
  );
};

export default Stepper;
