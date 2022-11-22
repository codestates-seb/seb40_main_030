import * as S from './Battery.style';

const BatteryDetails = ({ details }) => {
  return (
    <S.BatteryDetailsContainer>
      <div>{`주유소 : ${details.station}`}</div>
      <div>{`가 격 : ${details.price}`}</div>
      <div>{`용 량 : ${details.capacity}`}</div>
    </S.BatteryDetailsContainer>
  );
};

export default BatteryDetails;
