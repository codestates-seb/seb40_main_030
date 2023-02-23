/* eslint-disable react/no-unused-prop-types */
import { useState } from 'react';

import { BatteryType } from '@/@types';
import { BatteryEmpty, ShadowButton, ShadowCard } from '@/components/@common';
import InputModal from '@/components/Business/InputModal/InputModal';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetBookingList } from '@/hooks';

import { ContentModal } from './Content.style';
import * as S2 from './Content.style';
import DateBox from './DateBox';
import Cancel from '../Options/Cancel';

type Props = {
  battery: BatteryType;
  totalPrice: string;
  paymentId: number;
  startTime: string;
  returnTime: string;
};

// 이 부분의 분리가 필요할듯
function BookingList() {
  const [currentPayment, setCurrentPayment] = useState<number | null>(0);
  const { data: bookingList } = useGetBookingList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (bookingList.length === 0) {
    return <BatteryEmpty />;
  }

  return bookingList?.map(
    ({ battery, totalPrice, paymentId, startTime, returnTime }: Props) => {
      return (
        <S.BatteryContainer key={paymentId}>
          <ShadowCard>
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
                <DateBox startTime={startTime} returnTime={returnTime} border />
                <ShadowButton
                  shadow={false}
                  content='예약 취소하기'
                  style={{
                    fontSize: 13,
                    marginTop: 20,
                    width: '80px',
                    padding: '10px 5px',
                  }}
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
              <ContentModal height='30%'>
                <Cancel
                  startTime={startTime}
                  returnTime={returnTime}
                  setIsModalOpen={setIsModalOpen}
                  currentPayment={currentPayment}
                  setCurrentPayment={setCurrentPayment}
                  paymentId={paymentId}
                />
              </ContentModal>
            </InputModal>
          )}
        </S.BatteryContainer>
      );
    },
  );
}

export default BookingList;
