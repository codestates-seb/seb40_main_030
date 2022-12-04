import { MapMarkerIcon } from '@/assets';
import { DEFAULT_BATTERY_IMAGE } from '@/constants/admin';

import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatusTitle from './BatteryStatusTitle';

const BatteryCard = ({ openModalHandler, imgUrl, details, status }) => {
  const errorHandler = (e) => {
    e.target.src = DEFAULT_BATTERY_IMAGE;
  };

  return (
    <div style={{ width: '100%' }}>
      <S.BatteryContainer onClick={openModalHandler}>
        <S.LeftAlignWrapper>
          <S.BatteryImgContainer>
            <img
              src={imgUrl || DEFAULT_BATTERY_IMAGE}
              onError={errorHandler}
            ></img>
          </S.BatteryImgContainer>
          <BatteryDetails details={details} />
        </S.LeftAlignWrapper>
        <S.RightAlignWrapper>
          <BatteryStatusTitle status={[status, details.reservationState]} />
          <S.BatteryLocation>
            <MapMarkerIcon width='15px' height='15px' />
            <div>{details.stationName}</div>
          </S.BatteryLocation>
        </S.RightAlignWrapper>
      </S.BatteryContainer>
    </div>
  );
};

export default BatteryCard;
