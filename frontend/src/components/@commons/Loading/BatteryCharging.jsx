import * as S from './BatteryCharging.style';

const BatteryCharging = () => {
  return (
    <S.Wrapper>
      <S.Title>집나간 배터리</S.Title>
      <S.Battery></S.Battery>
      <S.Message className='glow'>Loading...</S.Message>
    </S.Wrapper>
  );
};

export default BatteryCharging;
