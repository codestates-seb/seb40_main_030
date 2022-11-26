import { useNavigate } from 'react-router-dom';

import { ShadowButton, ShadowCard } from '@/components/@commons';
import { PRICE_REGEX } from '@/constants';
import { useCheckValidReserveTable, useSnackBar } from '@/hooks';
import useConvertDate from '@/hooks/commons/useConvertDate';

import * as S from './Features.style';
import ReservationChart from './ReservationChart';

// 주유소 이름과 위치정보 전화번호 ??
const BatteryInfo = ({ content, station }) => {
  const navigate = useNavigate();
  const { openSnackBar } = useSnackBar();
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const {
    capacity,
    status,
    price,
    photoURL,
    batteryId,
    batteryName,
    createdAt,
  } = content;
  const { year, month, date } = useConvertDate(createdAt);

  const handleClick = () => {
    navigate(`/payments/${batteryId}`, {
      state: {
        name: station.name,
        price,
        batteryId,
        capacity,
        status,
        photoURL,
        startPoint,
        endPoint,
        batteryName,
      },
    });
  };

  return (
    <S.BatteryContainer>
      <ShadowCard width='100%' height='250px'>
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage src={photoURL} alt='notFound' />
            <S.Capacity>
              {capacity.toString().replace(PRICE_REGEX, ',')}
            </S.Capacity>
            <span>제조일 : {`${year}-${month}-${date}`}</span>
          </S.ImageContainer>
          <S.ProductInfoContainer>
            <S.BatteryName>{batteryName}</S.BatteryName>
            <S.PriceContainer>
              <S.Price>{price.toString().replace(PRICE_REGEX, ',')}</S.Price>
              <span>원</span>
            </S.PriceContainer>
            <S.PricePerMin>
              3000원 / <span>10분</span>
            </S.PricePerMin>
            <ShadowButton
              noShadow={true}
              color={status ? '#1070fc' : 'lightgrey'}
              width='150px'
              padding='10px 5px'
              content='예약하기'
              style={{ fontSize: 15 }}
              onClick={() =>
                status ? handleClick() : openSnackBar('이미 예약된 상품입니다.')
              }
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
        <ReservationChart status={status} />
      </ShadowCard>
    </S.BatteryContainer>
  );
};

export default BatteryInfo;
