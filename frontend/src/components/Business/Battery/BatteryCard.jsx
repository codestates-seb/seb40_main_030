import * as S from './Battery.style';
import BatteryDeleteButton from './BatteryDeleteButton';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, details, status, batteryId }) => {
  return (
    <S.BatteryContainer>
      <S.LeftAlignWrapper>
        <S.BatteryImgContainer>
          <img src={imgUrl}></img>
        </S.BatteryImgContainer>
        <BatteryDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <BatteryStatus status={status} />
        <BatteryDeleteButton status={status} batteryId={batteryId} />
      </S.RightAlignWrapper>
    </S.BatteryContainer>
  );
};

export default BatteryCard;
