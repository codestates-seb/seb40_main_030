import * as S from './Battery.style';
import BatteryDeleteButton from './BatteryDeleteButton';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, details, status, batteryId }) => {
  return (
    <S.BatteryContainer>
      <S.LeftAlignWrapper>
        <S.BatteryImgContainer src={imgUrl}></S.BatteryImgContainer>
        <BatteryDetails details={details} />
      </S.LeftAlignWrapper>
      <S.RightAlignWrapper>
        <BatteryDeleteButton status={status} batteryId={batteryId} />
        <BatteryStatus status={status} />
      </S.RightAlignWrapper>
    </S.BatteryContainer>
  );
};

export default BatteryCard;
