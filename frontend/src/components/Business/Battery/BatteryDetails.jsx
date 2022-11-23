import * as S from './Battery.style';

const BatteryDetails = ({ details }) => {
  return (
    <S.BatteryDetailsContainer>
      <li>{`주유소 : ${details.stationId}`}</li>
      <li>{`가 격 : ${details.price}`}</li>
      <li>{`용 량 : ${details.capacity}`}</li>
    </S.BatteryDetailsContainer>
  );
};

export default BatteryDetails;
