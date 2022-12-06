import { BatteryEmpty, ShadowButton, ShadowCard } from '@/components/@commons';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetHistoryList } from '@/hooks';

import * as S2 from './Content.style';
import DateBox from './DateBox';

const HistoryList = () => {
  const { data: historyList } = useGetHistoryList();

  if (historyList?.length === 0) {
    return <BatteryEmpty />;
  }

  return historyList?.map(({ battery, paymentId, startTime, returnTime }) => (
    <S.BatteryContainer key={paymentId}>
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
                {(
                  ((battery.price + battery.defaultPrice) *
                    (new Date(returnTime).getTime() -
                      new Date(startTime).getTime())) /
                  (1000 * 60)
                )
                  .toString()
                  .replace(PRICE_REGEX, ',')}
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
              content='반납 완료된 배터리'
              style={{ fontSize: 13, marginTop: 20 }}
              disabled={true}
              color='gray'
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
      </ShadowCard>
    </S.BatteryContainer>
  ));
};

export default HistoryList;
