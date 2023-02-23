/* eslint-disable react/no-unused-prop-types */
import { BatteryEmpty, ShadowButton, ShadowCard } from '@/components/@common';
import * as S from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetHistoryList } from '@/hooks';

import * as S2 from './Content.style';
import DateBox from './DateBox';
import { BatteryType } from '../../../../@types/index';

type HistoryListType = {
  battery: BatteryType;
  paymentId: number;
  startTime: string;
  returnTime: string;
};

function HistoryList() {
  const { data: historyList } = useGetHistoryList();

  if (historyList?.length === 0) {
    return <BatteryEmpty />;
  }

  return historyList?.map(
    ({ battery, paymentId, startTime, returnTime }: HistoryListType) => (
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
                  {(
                    ((battery.price + battery.defaultPrice) *
                      (new Date(returnTime).getTime() -
                        new Date(startTime).getTime())) /
                    (1000 * 60) /
                    10
                  )
                    .toString()
                    .replace(PRICE_REGEX, ',')}
                </S.Price>
                <span>원</span>
              </S.PriceContainer>
              <DateBox startTime={startTime} returnTime={returnTime} border />
              <ShadowButton
                shadow={false}
                content='반납 완료된 배터리'
                style={{
                  fontSize: 13,
                  marginTop: 20,
                  width: '80px',
                  padding: '10px 5px',
                }}
                disabled
                color='gray'
              />
            </S.ProductInfoContainer>
          </S.ProductWrapper>
        </ShadowCard>
      </S.BatteryContainer>
    ),
  );
}

export default HistoryList;
