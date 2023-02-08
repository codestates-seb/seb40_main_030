import { ShadowButton } from '@/components/@commons';
import { BOOKING_TYPE } from '@/constants';
import { useReservation, useSnackBar } from '@/hooks';

import * as S from './BookingTypeBox.style';

const BookingTypeBox = () => {
  const { openSnackBar } = useSnackBar();
  const currentHour = new Date().getHours();
  const { reservationStatus, setReservationStatus } = useReservation();

  return (
    <S.BookingContainer>
      <ShadowButton
        onClick={() => {
          if (currentHour === 23 || currentHour === 0) {
            openSnackBar('하루 이상 빌릴래요 탭으로 이동 되었습니다.');
            setReservationStatus({
              ...reservationStatus,
              bookingType: BOOKING_TYPE.MULTIPLE,
            });
          } else {
            setReservationStatus({
              ...reservationStatus,
              bookingType: BOOKING_TYPE.SINGLE,
            });
          }
        }}
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
