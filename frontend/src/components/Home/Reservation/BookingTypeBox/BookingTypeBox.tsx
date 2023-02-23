import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { ShadowButton } from '@/components/@common';
import { BOOKING_TYPE, MESSAGE } from '@/constants';
import { useSnackBar } from '@/hooks';
import { reservationState } from '@/recoil/pagesState';

const BUTTON_CONTENT = {
  SINGLE: '잠깐만 빌릴래요',
  MULTIPLE: '하루 이상 빌릴래요',
};

const BookingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30vh;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

function BookingTypeBox() {
  const { openSnackBar } = useSnackBar();
  const currentHour = new Date().getHours();
  const [reservationStatus, setReservationStatus] =
    useRecoilState(reservationState);

  return (
    <BookingContainer>
      <ShadowButton
        onClick={() => {
          if (currentHour === 23 || currentHour === 0) {
            openSnackBar(MESSAGE.NAVIGATE_TO_DIFFERENT_BOOKING_TYPE);
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
        content={BUTTON_CONTENT.SINGLE}
      />
      <ShadowButton
        onClick={() =>
          setReservationStatus({
            ...reservationStatus,
            bookingType: BOOKING_TYPE.MULTIPLE,
          })
        }
        content={BUTTON_CONTENT.MULTIPLE}
      />
    </BookingContainer>
  );
}

export default BookingTypeBox;
