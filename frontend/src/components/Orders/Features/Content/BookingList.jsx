import { ShadowButton, ShadowCard } from '@/components/@commons';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetBookingList } from '@/hooks';

import DateBox from './DateBox';

const BookingList = () => {
  const { data: bookingList } = useGetBookingList();

  return bookingList.map(({ battery, paymentId, startTime, endTime }) => (
    <S.BatteryContainer key={paymentId}>
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
              noShadow={true}
              width='80px'
              padding='10px 5px'
              content='예약 취소하기'
              style={{ fontSize: 13, marginTop: 20 }}
              onClick={() => alert('정말 취소하시겠습니까 ?')}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
    </S.BatteryContainer>
  ));
};

export default BookingList;
