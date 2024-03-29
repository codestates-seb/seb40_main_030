import { useNavigate } from 'react-router-dom';

import { SyntheticEvent } from 'react';

import { BatterImg } from '@/assets';
import { ShadowButton, ShadowCard } from '@/components/@commons';
import { PRICE_REGEX } from '@/constants';
import {
  useCheckValidReserveTable,
  useConvertDate,
  useTimeDifference,
} from '@/hooks';

import * as S from './Features.style';
import ReservationChart from './ReservationChart';

type Props = {
  content: {
    capacity: string;
    price: any;
    photoURL: string;
    batteryId: string | number;
    batteryName: string;
    createdAt: string | number;
    defaultPrice: any;
  };
  station: {
    name: string;
  };
};

const BatteryInfo = ({ content, station }: Props) => {
  const navigate = useNavigate();
  const { startPoint, endPoint } = useCheckValidReserveTable();
  const {
    capacity,
    price,
    photoURL,
    batteryId,
    batteryName,
    createdAt,
    defaultPrice,
  } = content;
  const { year, month, date } = useConvertDate(createdAt);
  const { periodInMin } = useTimeDifference();

  const handleClick = () => {
    navigate(`/payments/${batteryId}`, {
      state: {
        name: station.name,
        price: price * periodInMin,
        defaultPrice,
        capacity,
        batteryId,
        photoURL,
        startPoint,
        endPoint,
        batteryName,
      },
    });
  };

  const imageOnErrorHandler = (
    e: SyntheticEvent<HTMLImageElement, Event> | any,
  ) => {
    e.target.onError = null;

    e.target.src = BatterImg;
  };

  return (
    <S.BatteryContainer>
      <ShadowCard width='100%' height='250px'>
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage
              src={photoURL}
              alt='dd'
              onError={(e) => imageOnErrorHandler(e)}
            />
            <S.Capacity>
              {capacity.toString().replace(PRICE_REGEX, ',')}
            </S.Capacity>
            <span>제조일 : {`${year}-${month}-${date}`}</span>
          </S.ImageContainer>
          <S.ProductInfoContainer>
            <S.BatteryName>{batteryName}</S.BatteryName>
            <S.PriceContainer>
              <S.Price>
                {(price * periodInMin + defaultPrice)
                  .toString()
                  .replace(PRICE_REGEX, ',')}
              </S.Price>
              <span>원</span>
            </S.PriceContainer>
            <S.PricePerMin>
              {price?.toString().replace(PRICE_REGEX, ',')}원 /{' '}
              <span>10분</span>
            </S.PricePerMin>
            <S.PricePerMin>
              {defaultPrice?.toString().replace(PRICE_REGEX, ',')}원 /{' '}
              <span>기본요금</span>
            </S.PricePerMin>
            <ShadowButton
              shadow={false}
              color='#22577e'
              width='150px'
              padding='10px 5px'
              content='예약하기'
              style={{ fontSize: 15 }}
              onClick={() => handleClick()}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
        <ReservationChart content={content} />
      </ShadowCard>
    </S.BatteryContainer>
  );
};

export default BatteryInfo;
