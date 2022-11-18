import * as S from './BatteryCharging.style';

const BatteryCharging = ({ message, chargingSpeed }) => {
  return (
    <S.Wrapper>
      <S.Title>집나간 배터리</S.Title>
      <S.Battery chargingSpeed={chargingSpeed}></S.Battery>
      <S.Message className='glow'>{message}</S.Message>
    </S.Wrapper>
  );
};

export default BatteryCharging;
