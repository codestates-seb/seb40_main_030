import * as S from './Battery.style';

const BatteryDetails = ({ station, price, capacity }) => {
  return (
    <S.BatteryDetailsContainer>
      <div>{`주유소 : ${station}`}</div>
      <div>{`가 격 : ${price}`}</div>
      <div>{`용 량 : ${capacity}`}</div>
    </S.BatteryDetailsContainer>
  );
};

export default BatteryDetails;
