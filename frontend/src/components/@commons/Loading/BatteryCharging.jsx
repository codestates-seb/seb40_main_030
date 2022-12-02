import { DESKTOP_MEDIA_QUERY } from '@/constants';
import { useMediaQuery } from '@/hooks';

import * as S from './BatteryCharging.style';

const BatteryCharging = ({ message = 'Loading...', chargingSpeed = '3s' }) => {
  const matches = useMediaQuery(DESKTOP_MEDIA_QUERY);

  return (
    <S.Wrapper matches={matches}>
      <S.Title>집나간 배터리</S.Title>
      <S.Battery chargingSpeed={chargingSpeed}></S.Battery>
      <S.Message className='glow'>{message}</S.Message>
    </S.Wrapper>
  );
};

export default BatteryCharging;
