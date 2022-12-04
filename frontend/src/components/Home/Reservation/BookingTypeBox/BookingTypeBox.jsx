import { ShadowButton } from '@/components/@commons';
import { BOOKING_TYPE } from '@/constants';
import { useReservation } from '@/hooks';

import * as S from './BookingTypeBox.style';

// 단일예약 복수일 예약하기 따로
// 최소 설정시간 1시간

const BookingTypeBox = () => {
  const { reservationStatus, setReservationStatus } = useReservation();

  return (
    <S.BookingContainer>
      <ShadowButton
        onClick={() =>
          setReservationStatus({
            ...reservationStatus,
            bookingType: BOOKING_TYPE.SINGLE,
          })
        }
        content={'잠깐만 빌릴래요'}
      />
      <ShadowButton
        onClick={() =>
          setReservationStatus({
            ...reservationStatus,
            bookingType: BOOKING_TYPE.MULTIPLE,
          })
        }
        content={'하루 이상 빌릴래요'}
      />
    </S.BookingContainer>
  );
};

export default BookingTypeBox;
