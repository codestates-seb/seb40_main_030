import { useState } from 'react';

import { ShadowButton, ShadowCard } from '@/components/@commons';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetHistoryList } from '@/hooks';

import DateBox from './DateBox';

const HistoryList = () => {
  const { data: historyList } = useGetHistoryList();
  const [isActive, setIsActive] = useState(false);

  return historyList.map(({ battery, paymentId, startTime, endTime }) => (
    <S.BatteryContainer key={paymentId}>
      <ShadowCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        transition={{ duration: 0.3 }}
      >
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage src={battery.photoURL} alt='batteryImage' />
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
              content='반납 완료된 배터리'
              style={{ fontSize: 13, marginTop: 20 }}
              onClick={() => {
                setIsActive(!isActive);
              }}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
    </S.BatteryContainer>
  ));
};

export default HistoryList;
