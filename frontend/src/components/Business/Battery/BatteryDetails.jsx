import * as S from './Battery.style';

const BatteryDetails = ({ details }) => {
  return (
    <S.BatteryDetailsContainer>
      <h1>{details.batteryName && `${details.batteryName}`}</h1>
      <h2>
        {details.capacity &&
          `${parseInt(details.capacity).toLocaleString('ko-KR')}mA`}
      </h2>
      <h3>{details.price && `${details.price.toLocaleString('ko-KR')}원`}</h3>
      <h4>{details.endTime && `~${details.endTime.replace('T', ' ')}`}</h4>
    </S.BatteryDetailsContainer>
  );
};

export default BatteryDetails;
