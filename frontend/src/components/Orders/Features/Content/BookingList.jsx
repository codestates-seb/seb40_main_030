import { useState } from 'react';

import { BatteryEmpty, ShadowButton, ShadowCard } from '@/components/@commons';
import InputModal from '@/components/Business/InputModal/InputModal';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetBookingList } from '@/hooks';

import Cancel from '../Options/Cancel';
import { ContentModal } from './Content.style';
import * as S2 from './Content.style';
import DateBox from './DateBox';

const BookingList = () => {
  const [currentPayment, setCurrentPayment] = useState();
  const { data: bookingList } = useGetBookingList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (bookingList.length === 0) {
    return <BatteryEmpty />;
  }

  return bookingList?.map(
    ({ battery, totalPrice, paymentId, startTime, returnTime }) => (
      <S.BatteryContainer key={paymentId} id={paymentId}>
        <ShadowCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          transition={{ duration: 0.3 }}
        >
          <S.ProductWrapper>
            <S2.ImageContainer>
              <S2.BatteryImage src={battery.photoURL} alt='batteryImage' />
              <S.Capacity>
                {battery.capacity.toString().replace(PRICE_REGEX, ',')}
              </S.Capacity>
              <S.BatteryName style={{ marginTop: 10, fontSize: 18 }}>
                {battery.batteryName}
              </S.BatteryName>
            </S2.ImageContainer>
            <S.ProductInfoContainer>
              <S.PriceContainer>
                <S.Price>
                  {totalPrice.toString().replace(PRICE_REGEX, ',')}
                </S.Price>
                <span>원</span>
              </S.PriceContainer>
              <DateBox
                startTime={startTime}
                returnTime={returnTime}
                border={true}
              />
              <ShadowButton
                shadow={false}
                width='80px'
                padding='10px 5px'
                content='예약 취소하기'
                style={{ fontSize: 13, marginTop: 20 }}
                onClick={() => {
                  setIsModalOpen(true);
                  setCurrentPayment(paymentId);
                }}
              />
            </S.ProductInfoContainer>
          </S.ProductWrapper>
        </ShadowCard>
        {currentPayment === paymentId && (
          <InputModal
            isModalOpen={isModalOpen}
            closeModalHandler={setIsModalOpen}
          >
            <ContentModal height={'30%'}>
              <Cancel
                startTime={startTime}
                returnTime={returnTime}
                setIsModalOpen={setIsModalOpen}
                battery={battery}
                currentPayment={currentPayment}
                setCurrentPayment={setCurrentPayment}
                paymentId={paymentId}
              />
            </ContentModal>
          </InputModal>
        )}
      </S.BatteryContainer>
    ),
  );
};

export default BookingList;
