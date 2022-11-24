import * as S from './BatteryCharging.style';

const BatteryCharging = ({ message = 'Loading...', chargingSpeed = '3s' }) => {
  return (
    <S.Wrapper animate={{ opacity: 0, transition: { duration: 3.5 } }}>
      <S.Title>집나간 배터리</S.Title>
      <S.Battery chargingSpeed={chargingSpeed}></S.Battery>
      <S.Message className='glow'>{message}</S.Message>
    </S.Wrapper>
  );
};

export default BatteryCharging;
