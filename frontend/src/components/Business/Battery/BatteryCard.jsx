import * as S from './Battery.style';
import BatteryDetails from './BatteryDetails';
import BatteryStatus from './BatteryStatus';

const BatteryCard = ({ imgUrl, station, price, capacity, status }) => {
  return (
    <S.BatteryContainer>
      <S.BatteryImgContaioner src={imgUrl}></S.BatteryImgContaioner>
      <BatteryDetails station={station} price={price} capacity={capacity} />
      <BatteryStatus status={status} />
    </S.BatteryContainer>
  );
};

export default BatteryCard;
