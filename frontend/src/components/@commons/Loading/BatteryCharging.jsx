import { useMediaQuery } from '@/hooks';

import * as S from './BatteryCharging.style';

const BatteryCharging = ({ message = 'Loading...', chargingSpeed = '3s' }) => {
  const matches = useMediaQuery('(min-width: 468px)');

  return (
    <S.Wrapper matches={matches}>
      <S.BatteryContainer>
        <S.Title>집나간 배터리</S.Title>
        <S.Battery chargingSpeed={chargingSpeed}></S.Battery>
        <S.Message className='glow'>{message}</S.Message>
      </S.BatteryContainer>
    </S.Wrapper>
  );
};

export default BatteryCharging;
