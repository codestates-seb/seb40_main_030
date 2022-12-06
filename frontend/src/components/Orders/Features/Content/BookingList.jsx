import { useState } from 'react';

import { BatteryEmpty, ShadowButton, ShadowCard } from '@/components/@commons';
import InputModal from '@/components/Business/InputModal/InputModal';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetBookingList } from '@/hooks';

import Cancel from '../Options/Cancel';
import { ContentModal } from './Content.style';
import DateBox from './DateBox';

const BookingList = () => {
  const { data: bookingList } = useGetBookingList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (bookingList.length === 0) {
    return <BatteryEmpty />;
  }

  return bookingList?.map(({ battery, paymentId, startTime, endTime }) => (
    <S.BatteryContainer key={paymentId} id={paymentId}>
      <ShadowCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage
              src={battery.photoURL}
              alt='batteryImage'
              // onError={(e) => imageOnErrorHandler(e)}
            />
            <S.Capacity>
              {battery.capacity.toString().replace(PRICE_REGEX, ',')}
            </S.Capacity>
            <S.BatteryName style={{ marginTop: 10, fontSize: 18 }}>
              {battery.batteryName}
            </S.BatteryName>
          </S.ImageContainer>
          <S.ProductInfoContainer>
            <S.PriceContainer>
              <S.Price>
                {(battery.price + battery.defaultPrice)
                  .toString()
                  .replace(PRICE_REGEX, ',')}
              </S.Price>
              <span>원</span>
            </S.PriceContainer>
            <DateBox startTime={startTime} endTime={endTime} border={true} />
            <ShadowButton
              shadow={false}
              width='80px'
              padding='10px 5px'
              content='예약 취소하기'
              style={{ fontSize: 13, marginTop: 20 }}
              // 정말로 예약 취소할건지 물어보는 모달
              // 같은 값 입력시
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
      <InputModal isModalOpen={isModalOpen} closeModalHandler={setIsModalOpen}>
        <ContentModal height={'30%'}>
          <Cancel
            startTime={startTime}
            endTime={endTime}
            setIsModalOpen={setIsModalOpen}
          />
        </ContentModal>
      </InputModal>
    </S.BatteryContainer>
  ));
};

export default BookingList;
