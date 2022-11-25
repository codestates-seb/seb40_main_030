import * as S from './Battery.style';
import BatteryDeleteButton from './BatteryDeleteButton';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, details, status, batteryId }) => {
  return (
    <S.BatteryContainer>
      <S.BatteryImgContainer src={imgUrl}></S.BatteryImgContainer>
      <BatteryDetails details={details} />
      <BatteryDeleteButton status={status} batteryId={batteryId} />
      <BatteryStatus status={status} />
    </S.BatteryContainer>
  );
};

export default BatteryCard;
