import { Stepper } from '@/components/@commons';
import { useCheckValidReserveTable } from '@/hooks';

import * as S from './Features.style';

const ReservationChart = ({ content }) => {
  const { startPoint, endPoint } = useCheckValidReserveTable();

  return (
    <S.ChartWrapper>
      <Stepper startPoint={startPoint} endPoint={endPoint} content={content} />
    </S.ChartWrapper>
  );
};

export default ReservationChart;
