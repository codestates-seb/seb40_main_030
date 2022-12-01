import { MapMarkerIcon } from '@/assets';

import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatusTitle from './BatteryStatusTitle';

const BatteryCard = ({ openModalHandler, imgUrl, details, status }) => {
  return (
    <S.BatteryContainer onClick={openModalHandler}>
      <S.LeftAlignWrapper>
        <S.BatteryImgContainer>
          <img src={imgUrl}></img>
        </S.BatteryImgContainer>
        <BatteryDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <BatteryStatusTitle status={status} />
        <S.BatteryLocation>
          <MapMarkerIcon width='15px' height='15px' />
          <div>{details.stationName}</div>
        </S.BatteryLocation>
      </S.RightAlignWrapper>
    </S.BatteryContainer>
  );
};

export default BatteryCard;
