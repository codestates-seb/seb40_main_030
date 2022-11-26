import { Stepper } from '@/components/@commons';
import { useCheckValidReserveTable } from '@/hooks';

import * as S from './Features.style';

const ReservationChart = ({ status }) => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  return (
    <S.ChartWrapper>
      <Stepper startPoint={startPoint} endPoint={endPoint} status={status} />
    </S.ChartWrapper>
  );
};

export default ReservationChart;
