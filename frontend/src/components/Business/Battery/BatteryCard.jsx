import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, details, status }) => {
  return (
    <S.BatteryContainer>
      <S.BatteryImgContainer src={imgUrl}></S.BatteryImgContainer>
      <BatteryDetails details={details} />
      <BatteryStatus status={status} />
    </S.BatteryContainer>
  );
};

export default BatteryCard;
