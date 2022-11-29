import { ShadowCard } from '@/components/@commons';
import * as P from '@/components/Rental/Features/Features.style';
import { PRICE_REGEX } from '@/constants';
import { useGetHistoryList } from '@/hooks';

const HistoryList = () => {
  const { data: historyList } = useGetHistoryList();

  return historyList?.map(({ battery, paymentId }) => (
    <P.BatteryContainer key={paymentId}>
      <ShadowCard>
        <P.ProductWrapper>
          <P.ImageContainer>
            <P.BatteryImage
              src={battery?.photoURL}
              alt='dd'
              // onError={(e) => imageOnErrorHandler(e)}
            />
            <P.Capacity>
              {battery?.capacity.toString().replace(PRICE_REGEX, ',')}
            </P.Capacity>
          </P.ImageContainer>
          <P.ProductInfoContainer>
            <P.BatteryName>{battery?.batteryName}</P.BatteryName>
            <P.PriceContainer>
              <P.Price>
                {battery?.price.toString().replace(PRICE_REGEX, ',')}
              </P.Price>
              <span>원</span>
            </P.PriceContainer>
            <P.PricePerMin>
              {battery?.price.toString().replace(PRICE_REGEX, ',')}원 /{' '}
              <span>10분</span>
            </P.PricePerMin>
          </P.ProductInfoContainer>
        </P.ProductWrapper>
      </ShadowCard>
    </P.BatteryContainer>
  ));
};

export default HistoryList;
