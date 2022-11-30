import * as S from './Battery.style';

const BatteryDetails = ({ details }) => {
  return (
    <S.BatteryDetailsContainer>
      <li>{`주유소 : ${details.stationName}`}</li>
      <li>{`브랜드 : ${details.batteryName}`}</li>
      <li>{`가 격 : ${details.price.toLocaleString('ko-KR')}원`}</li>
      <li>{`용 량 : ${details.capacity}`}</li>
    </S.BatteryDetailsContainer>
  );
};

export default BatteryDetails;
