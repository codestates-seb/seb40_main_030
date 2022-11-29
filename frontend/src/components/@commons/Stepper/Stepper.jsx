import { useReservation } from '@/hooks';
import useConvertDate from '@/hooks/commons/useConvertDate';

import * as S from './Stepper.style';
import StepperItem from './StepperItem';

const Stepper = ({ startPoint, endPoint, content }) => {
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
        <StepperItem reservations={content?.reservations} />
        <S.Item>
          {reservationStatus.bookingType === 'multiple' ? (
            <S.Description>{`${
              startMonth > 12 ? 1 : startMonth
            }/${startDate}`}</S.Description>
          ) : (
            <S.Description>{`${startHour}:${startMinute}`}</S.Description>
          )}
        </S.Item>
        <S.Item>
          {reservationStatus.bookingType === 'multiple' ? (
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
};

export default Stepper;
