import { useNavigate } from 'react-router-dom';

import { ShadowButton, ShadowCard } from '@/components/@commons';
import { PRICE_REGEX } from '@/constants';
import { useCheckValidReserveTable } from '@/hooks';

import * as S from './Features.style';

// 주유소 이름과 위치정보 전화번호 ??
const BatteryInfo = ({ content, station }) => {
  const navigate = useNavigate();
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const { capacity, status, price, photoURL, batteryId } = content;

  const reservationInformation = {
    name: station.name,
    price,
    batteryId,
    capacity,
    status,
    photoURL,
    startPoint,
    endPoint,
  };

  return (
    <S.BatteryContainer>
      <ShadowCard width='100%' height='200px'>
        <S.ImageContainer>
          <S.BatteryImage src={photoURL} />
        </S.ImageContainer>
        <S.ProductInfoContainer>
          <S.Capacity>
            {capacity.toString().replace(PRICE_REGEX, ',')}
          </S.Capacity>
          <S.PriceContainer>
            <S.Price>{price.toString().replace(PRICE_REGEX, ',')}</S.Price>
            <span>원</span>
          </S.PriceContainer>
          <ShadowButton
            noShadow={true}
            color={status ? '#1070fc' : 'lightgrey'}
            width='150px'
            padding='10px 5px'
            content='예약하기'
            style={{ fontSize: 15 }}
            onClick={() =>
              navigate(`/payments/${batteryId}`, {
                state: reservationInformation,
              })
            }
          />
        </S.ProductInfoContainer>
      </ShadowCard>
    </S.BatteryContainer>
  );
};

export default BatteryInfo;
