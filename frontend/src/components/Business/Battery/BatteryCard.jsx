import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, details, status }) => {
  return (
    <S.BatteryContainer>
      <S.BatteryImgContaioner src={imgUrl}></S.BatteryImgContaioner>
      <BatteryDetails details={details} />
      <BatteryStatus status={status} />
    </S.BatteryContainer>
  );
};

export default BatteryCard;
