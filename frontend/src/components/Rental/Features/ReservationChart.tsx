import { Stepper } from '@/components/@common';
import { useCheckValidReserveTable } from '@/hooks';

import * as S from './Features.style';

const ReservationChart = () => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  return (
    <S.ChartWrapper>
      <Stepper startPoint={startPoint || ''} endPoint={endPoint || ''} />
    </S.ChartWrapper>
  );
};

export default ReservationChart;
