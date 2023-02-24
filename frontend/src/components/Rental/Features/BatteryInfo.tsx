import { SyntheticEvent, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { BatteryType, StationType } from '@/@types';
import { BatterImg } from '@/assets';
import { ShadowButton, ShadowCard } from '@/components/@common';
import { PRICE_REGEX } from '@/constants';
import { useCheckValidReserveTable, useTimeDifference } from '@/hooks';
import { convertFullDateToSingleProp } from '@/utils';

import * as S from './Features.style';
import ReservationChart from './ReservationChart';

type Props = {
  content: BatteryType;
  station: StationType;
};

function BatteryInfo({ content, station }: Props): ReactElement {
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
  const { year, month, date } = convertFullDateToSingleProp(createdAt);
  const { periodInMin } = useTimeDifference();

  const handleClick: () => void = () => {
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

  const imageOnErrorHandler: (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => void = (e) => {
    e.currentTarget.onerror = null;

    e.currentTarget.src = BatterImg;
  };

  return (
    <S.BatteryContainer>
      <ShadowCard width='100%' height='250px'>
        <S.ProductWrapper>
          <S.ImageContainer>
            <S.BatteryImage
              src={photoURL}
              alt='dd'
              onError={imageOnErrorHandler}
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
              content='예약하기'
              style={{ fontSize: 15, width: '150px', padding: '10px 5px' }}
              onClick={handleClick}
            />
          </S.ProductInfoContainer>
        </S.ProductWrapper>
        <ReservationChart />
      </ShadowCard>
    </S.BatteryContainer>
  );
}

export default BatteryInfo;